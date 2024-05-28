import React from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Button from '@/components/ui/Button';
import Table, { TBody, Td, TFoot, Th, THead, Tr } from '@/components/ui/Table';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';

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
	columnHelper.group({
		id: 'hello',
		header: () => <span>Hello</span>,
		// footer: props => props.column.id,
		columns: [
			columnHelper.accessor('firstName', {
				cell: (info) => info.getValue() as Record<string, unknown>,
				footer: (props) => props.column.id,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: 'lastName',
				cell: (info) => info.getValue() as Record<string, unknown>,
				header: () => <span>Last Name</span>,
				footer: (props) => props.column.id,
			}),
		],
	}),
	columnHelper.group({
		header: 'Info',
		footer: (props) => props.column.id,
		columns: [
			columnHelper.accessor('age', {
				header: () => 'Age',
				footer: (props) => props.column.id,
			}),
			columnHelper.group({
				header: 'More Info',
				columns: [
					columnHelper.accessor('visits', {
						header: () => <span>Visits</span>,
						footer: (props) => props.column.id,
					}),
					columnHelper.accessor('status', {
						header: 'Status',
						footer: (props) => props.column.id,
					}),
					columnHelper.accessor('progress', {
						header: 'Profile Progress',
						footer: (props) => props.column.id,
					}),
				],
			}),
		],
	}),
];

const Table2Part = () => {
	const [data] = React.useState(() => [...defaultData]);
	const rerender = React.useReducer(() => ({}), {})[1];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Table</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<CardTitle>
						<Button variant='outline' color='zinc' onClick={() => rerender()}>
							Rerender
						</Button>
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<Table>
					<THead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Th key={header.id} colSpan={header.colSpan}>
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
									<Th key={header.id} colSpan={header.colSpan}>
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

export default Table2Part;
