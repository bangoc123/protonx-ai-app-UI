'use client';

import React, { FC } from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from '@hello-pangea/dnd';
import classNames from 'classnames';
import Card from '@/components/ui/Card';
import { TTask, TTasks } from '@/mocks/db/tasks.db';
import ColumnCardPartial from './ColumnCard.partial';
import TColumnsData from '../_types/columns.type';

interface IColumnCardWrapperPartialProps {
	columnKey: string;
	columnsData: TColumnsData;
	tasksData: TTasks;
	setTasksData(...args: unknown[]): unknown;
}
const ColumnCardWrapperPartial: FC<IColumnCardWrapperPartialProps> = ({
	columnKey,
	// columnsData,
	tasksData,
	setTasksData,
}) => {
	const cardsInTheColumn: TTask[] = tasksData[columnKey];

	return (
		<>
			{cardsInTheColumn.map((card, index) => (
				<Draggable key={card.id} draggableId={card.id} index={index}>
					{(
						providedDraggable: DraggableProvided,
						snapshotDraggable: DraggableStateSnapshot,
					) => (
						<Card
							data-component-name='ColumnCardWrapperPart'
							className={classNames('shadow-sm [&:not(:nth-last-child(2))]:mb-4', {
								'border border-blue-500': snapshotDraggable.isDragging,
							})}
							ref={providedDraggable.innerRef}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...providedDraggable.draggableProps}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...providedDraggable.dragHandleProps}
							style={providedDraggable.draggableProps.style}>
							<ColumnCardPartial
								columnKey={columnKey}
								// columnsData={columnsData}
								task={card}
								tasksData={tasksData}
								setTasksData={setTasksData}
								index={index}
							/>
						</Card>
					)}
				</Draggable>
			))}
		</>
	);
};

export default ColumnCardWrapperPartial;
