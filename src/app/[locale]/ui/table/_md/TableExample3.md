```tsx
import React, { useRef } from 'react';
import {
	ColumnDef,
	ColumnResizeMode,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Table, { TBody, Td, Th, THead, ThResizer, Tr } from './components/ui/Table';
import Card, { CardBody } from './components/ui/Card';
import useDomRect from './hooks/useDomRect';

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const defaultData: Person[] = [
	{
		firstName: 'tanner',
		lastName: 'linsley',
		age: 24,
		visits: 100,
		status: 'In Relationship',
		progress: 50,
	},
	{
		firstName: 'tandy',
		lastName: 'miller',
		age: 40,
		visits: 40,
		status: 'Single',
		progress: 80,
	},
	{
		firstName: 'joe',
		lastName: 'dirte',
		age: 45,
		visits: 20,
		status: 'Complicated',
		progress: 10,
	},
];

const defaultColumns: ColumnDef<Person>[] = [
	{
		header: 'Name',
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: 'firstName',
				cell: (info) => info.getValue() as Record<string, unknown>,
				footer: (props) => props.column.id,
			},
			{
				accessorFn: (row) => row.lastName,
				id: 'lastName',
				cell: (info) => info.getValue() as Record<string, unknown>,
				header: () => <span>Last Name</span>,
				footer: (props) => props.column.id,
			},
		],
	},
	{
		header: 'Info',
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: 'age',
				header: () => 'Age',
				footer: (props) => props.column.id,
			},
			{
				header: 'More Info',
				columns: [
					{
						accessorKey: 'visits',
						header: () => <span>Visits</span>,
						footer: (props) => props.column.id,
					},
					{
						accessorKey: 'status',
						header: 'Status',
						footer: (props) => props.column.id,
					},
					{
						accessorKey: 'progress',
						header: 'Profile Progress',
						footer: (props) => props.column.id,
					},
				],
			},
		],
	},
];

const MyComponent = () => {
	const [data] = React.useState(() => [...defaultData]);
	const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);

	const [columnResizeMode] = React.useState<ColumnResizeMode>('onChange');

	const table = useReactTable({
		data,
		columns,
		columnResizeMode,
		getCoreRowModel: getCoreRowModel(),
	});

	const divRef = useRef<HTMLDivElement>(null);
	const [domRect] = useDomRect(divRef);

	return (
		<Card>
			<CardBody className='overflow-auto'>
				<div ref={divRef} className='overflow-x-auto'>
					<Table
						{...{
							style: {
								width: domRect?.width || table.getCenterTotalSize(),
							},
						}}>
						<THead>
							{table.getHeaderGroups().map((headerGroup) => (
								<Tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<Th
											isResizable
											key={header.id}
											{...{
												colSpan: header.colSpan,
												style: {
													width: header.getSize(),
												},
											}}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
											<ThResizer
												isResizing={header.column.getIsResizing()}
												{...{
													onMouseDown: header.getResizeHandler(),
													onTouchStart: header.getResizeHandler(),
												}}
											/>
										</Th>
									))}
								</Tr>
							))}
						</THead>
						<TBody>
							{table.getRowModel().rows.map((row) => (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<Td
											key={cell.id}
											{...{
												style: {
													width: cell.column.getSize(),
												},
											}}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</Td>
									))}
								</Tr>
							))}
						</TBody>
					</Table>
				</div>
			</CardBody>
		</Card>
	);
};

export default MyComponent;
```
