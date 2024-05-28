'use client';

import React, { useEffect, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useParams } from 'next/navigation';
import TColumnsData from '@/app/[locale]/project/_types/columns.type';
import tasksDb, { TTasks } from '@/mocks/db/tasks.db';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { reorder, move } from '@/app/[locale]/project/_helper/helper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Image, { StaticImageData } from 'next/image';
import usersDb from '@/mocks/db/users.db';
import Container from '@/components/layouts/Container/Container';
import BoardPartial from '@/app/[locale]/project/_partial/Board.partial';
import ColumnsPartial from '@/app/[locale]/project/_partial/Columns.partial';

const ProjectBoardClient = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { slug: id } = useParams();

	const [globalFilter, setGlobalFilter] = useState<string>('');

	const columnsData: TColumnsData = {
		column1: {
			id: 'column1',
			title: 'Backlog',
			icon: 'HeroQueueList',
		},
		column2: { id: 'column2', title: 'To Do', icon: 'HeroClipboard' },
		column3: {
			id: 'column3',
			title: 'Pending',
			icon: 'HeroReceiptRefund',
		},
		column4: { id: 'column4', title: 'Run', icon: 'HeroPlay' },
		column5: { id: 'column5', title: 'Done', icon: 'HeroCheckCircle' },
	};

	const [tasks, setTasks] = useState<TTasks>(tasksDb);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const ITEMS = reorder(tasks[source.droppableId], source.index, destination.index);

			const sourceList = source.droppableId;
			setTasks({ ...tasks, [sourceList]: ITEMS });
		} else {
			const RESULT = move(
				tasks[source.droppableId],
				tasks[destination.droppableId],
				source,
				destination,
			);

			setTasks({
				...tasks,
				...RESULT,
			});
		}
	};

	function filterTasksByKeyword(tasksDB: TTasks, keyword: string) {
		const filteredTasks: TTasks = {};

		// eslint-disable-next-line guard-for-in,no-restricted-syntax
		for (const column in tasksDB) {
			filteredTasks[column] = tasksDB[column].filter((task) => {
				const titleMatch = task.title.toLowerCase().includes(keyword.toLowerCase());
				const subtitleMatch = task.subtitle.toLowerCase().includes(keyword.toLowerCase());
				const descriptionMatch = task.description
					.toLowerCase()
					.includes(keyword.toLowerCase());
				const labelMatch = task.label.toLowerCase().includes(keyword.toLowerCase());
				const itemsMatch = task.items.some((item) =>
					item.text.toLowerCase().includes(keyword.toLowerCase()),
				);

				return titleMatch || subtitleMatch || descriptionMatch || labelMatch || itemsMatch;
			});
		}

		return filteredTasks;
	}

	useEffect(() => {
		setTasks(filterTasksByKeyword(tasksDb, globalFilter));
		return () => {
			setTasks(tasksDb);
		};
	}, [globalFilter]);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft className='grow'>
					<FieldWrap
						className='w-full'
						firstSuffix={<Icon className='mx-2' icon='HeroFunnel' />}
						lastSuffix={
							globalFilter && (
								<Icon
									icon='HeroXMark'
									color='red'
									className='mx-2 cursor-pointer'
									onClick={() => {
										setGlobalFilter('');
									}}
								/>
							)
						}>
						<Input
							id='example'
							name='example'
							placeholder='Filter by keyword or by field'
							value={globalFilter ?? ''}
							onChange={(e) => setGlobalFilter(e.target.value)}
							className='w-full'
						/>
					</FieldWrap>
				</SubheaderLeft>
				<SubheaderRight>
					<div className='flex -space-x-2 overflow-hidden'>
						<Image
							src={usersDb[0].image?.thumb as StaticImageData}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[1].image?.thumb as StaticImageData}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[2].image?.thumb as StaticImageData}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[3].image?.thumb as StaticImageData}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
					</div>
				</SubheaderRight>
			</Subheader>
			<Container breakpoint={null} className='h-full max-w-full overflow-auto'>
				<DragDropContext onDragEnd={onDragEnd}>
					<BoardPartial>
						<ColumnsPartial
							columnsData={columnsData}
							tasksData={tasks}
							setTasksData={setTasks}
						/>
					</BoardPartial>
				</DragDropContext>
			</Container>
		</PageWrapper>
	);
};

export default ProjectBoardClient;
