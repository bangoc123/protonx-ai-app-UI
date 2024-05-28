'use client';

import React, { FC, useMemo, useState } from 'react';
import { Editable, Slate, withReact } from 'slate-react';
import { createEditor, Descendant } from 'slate';
import { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/Avatar';
import Icon from '@/components/icon/Icon';
import { TTask, TTasks } from '@/mocks/db/tasks.db';
import Image from 'next/image';
import TaskEditPartial from './TaskEdit.partial';

interface IColumnCardPartialProps {
	columnKey: string;
	// columnsData: TColumnsData;
	task: TTask;
	tasksData: TTasks;
	setTasksData(...args: unknown[]): unknown;
	index: number;
}
const ColumnCardPartial: FC<IColumnCardPartialProps> = ({
	columnKey,
	// columnsData,
	task,
	tasksData,
	setTasksData,
	index,
}) => {
	const [editPanelStatus, setEditPanelStatus] = useState<boolean>(false);

	const editor = useMemo(() => withReact(createEditor()), []);

	return (
		<>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle className='text-xl'>
						<div onClick={() => setEditPanelStatus(true)} role='presentation'>
							<div>{task.title}</div>
							{task.subtitle && (
								<div className='text-sm text-zinc-500'>{task.subtitle}</div>
							)}
						</div>
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Avatar
						src={task.user.image?.thumb}
						className='!w-8'
						name={`${task.user.firstName} ${task.user.lastName}`}
					/>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='flex flex-wrap gap-4'>
					<div className='flex gap-2'>
						{!!task?.attachments?.length && (
							<Badge
								variant='outline'
								rounded='rounded-full'
								className='border-transparent'>
								<small className='flex items-center gap-2'>
									<Icon icon='HeroPaperClip' />
									{task.attachments.length}
								</small>
							</Badge>
						)}
						{!!task?.items?.length && (
							<Badge
								variant='outline'
								rounded='rounded-full'
								className='border-transparent'>
								<small className='flex items-center gap-2'>
									<Icon icon='HeroCheck' />
									{task.items.length}
								</small>
							</Badge>
						)}
						{task.label && (
							<Badge
								color='emerald'
								variant='outline'
								rounded='rounded-full'
								className='border-transparent'>
								<small className=''>{task.label}</small>
							</Badge>
						)}
					</div>
					{task?.img && (
						<Image
							src={task?.img}
							alt=''
							className='aspect-[16/9] w-14 basis-full rounded-lg object-cover'
						/>
					)}
					<div className='basis-full'>
						<Slate
							editor={editor}
							initialValue={JSON.parse(task.description) as Descendant[]}>
							<Editable readOnly placeholder='Enter some plain text...' />
						</Slate>
					</div>
				</div>
			</CardBody>
			<TaskEditPartial
				task={task}
				isOpen={editPanelStatus}
				setIsOpen={setEditPanelStatus}
				columnKey={columnKey}
				tasksData={tasksData}
				setTasksData={setTasksData}
				index={index}
			/>
		</>
	);
};

export default ColumnCardPartial;
