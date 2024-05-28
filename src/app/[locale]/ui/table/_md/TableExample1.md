```tsx
import React, { useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Table, { TBody, Td, TFoot, Th, THead, Tr } from './components/ui/Table';
import Card, { CardBody } from './components/ui/Card';

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

const columnHelper = createColumnHelper<Person>();

const columns = [
	columnHelper.accessor('firstName', {
		cell: (info) => <span className='capitalize'>{info.getValue()}</span>,
		header: () => 'First Name',
		footer: () => 'First Name',
	}),
	columnHelper.accessor('lastName', {
		cell: (info) => <span className='capitalize'>{info.renderValue()}</span>,
		header: () => 'Last Name',
		footer: () => 'Last Name',
	}),
	columnHelper.accessor('age', {
		header: () => 'Age',
		footer: () => 'Age',
	}),
	columnHelper.accessor('visits', {
		header: () => 'Visits',
		footer: () => 'Visits',
	}),
	columnHelper.accessor('status', {
		header: () => 'Status',
		footer: () => 'Status',
	}),
	columnHelper.accessor('progress', {
		header: () => 'Profile Progress',
		footer: () => 'Profile Progress',
	}),
];

const MyComponent = () => {
	const [data] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Card>
			<CardBody>
				<Table>
					<THead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Th key={header.id} className='text-left'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</Th>
								))}
							</Tr>
						))}
					</THead>
					<TBody>
						{table.getRowModel().rows.map((row) => (
							<Tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<Td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Td>
								))}
							</Tr>
						))}
					</TBody>
					<TFoot>
						{table.getFooterGroups().map((footerGroup) => (
							<Tr key={footerGroup.id}>
								{footerGroup.headers.map((header) => (
									<Th key={header.id} className='text-left'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.footer,
													header.getContext(),
												)}
									</Th>
								))}
							</Tr>
						))}
					</TFoot>
				</Table>
			</CardBody>
		</Card>
	);
};

export default MyComponent;
```
