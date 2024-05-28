import { TTask } from '@/mocks/db/tasks.db';

/**
 * A little function to help us with reordering the result
 * @param list
 * @param startIndex
 * @param endIndex
 */
export const reorder = (list: TTask[], startIndex: number, endIndex: number): TTask[] => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

/**
 * Moves an item from one list to another list.
 * @param source
 * @param destination
 * @param droppableSource
 * @param droppableDestination
 */
export const move = (
	source: TTask[],
	destination: TTask[],
	droppableSource: { index: number; droppableId: string },
	droppableDestination: { index: number; droppableId: string },
) => {
	const sourceClone: TTask[] = Array.from(source);
	const destClone: TTask[] = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result: { [key: string]: TTask[] } = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};
