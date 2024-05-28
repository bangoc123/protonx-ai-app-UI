```tsx
import React, { useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from './components/ui/Card';
import Button from './components/ui/Button';
import Table, { TBody, Td, TFoot, Th, THead, Tr } from './components/ui/Table';
import Icon from './components/icon/Icon';
import { Image1, Image3, Image4, Image5, Image6 } from './assets/images';
import STOCK, { TStock } from './constants/stock.constant';
import Badge from './components/ui/Badge';
import priceFormat from './utils/priceFormat.util';
import Progress from './components/ui/Progress';

type Product = {
	productName: string;
	price: number;
	adBudget: number;
	stock: TStock;
	progress: number;
	image: string;
};

const defaultData: Product[] = [
	{
		productName: 'Joystick',
		price: 24,
		adBudget: 100,
		stock: STOCK.IN,
		progress: 50,
		image: Image1,
	},
	{
		productName: 'Thermos',
		price: 40,
		adBudget: 45,
		stock: STOCK.OUT_OF,
		progress: 80,
		image: Image4,
	},
	{
		productName: 'Shoe',
		price: 45,
		adBudget: 80,
		stock: STOCK.LIMITED,
		progress: 10,
		image: Image3,
	},
	{
		productName: 'Pen',
		price: 45,
		adBudget: 20,
		stock: STOCK.CRITICAL,
		progress: 10,
		image: Image5,
	},
	{
		productName: 'Headphone',
		price: 45,
		adBudget: 130,
		stock: STOCK.IN,
		progress: 10,
		image: Image6,
	},
];

const columnHelper = createColumnHelper<Product>();

const columns = [
	columnHelper.accessor('image', {
		cell: (info) => (
			<img
				className='aspect-[9/12] w-14 rounded object-cover 2xl:w-20'
				src={info.getValue()}
				alt=''
			/>
		),
		header: 'Image',
		footer: 'Image',
	}),
	columnHelper.accessor('productName', {
		cell: (info) => info.getValue(),
		header: 'Product Name',
		footer: 'Product Name',
	}),
	columnHelper.accessor('price', {
		cell: (info) => priceFormat(info.getValue()),
		header: 'Price',
		footer: 'Price',
	}),
	columnHelper.accessor('adBudget', {
		cell: (info) => <Progress value={info.getValue()} rounded='rounded' />,
		header: 'Ad. Budget',
		footer: 'Ad. Budget',
	}),
	columnHelper.accessor('stock', {
		cell: (info) => (
			<Badge variant='outline' color={info.getValue().color} className='border-transparent'>
				{info.getValue().text}
			</Badge>
		),
		header: 'Stock',
		footer: 'Stock',
	}),
	columnHelper.accessor('progress', {
		header: 'Profile Progress',
		footer: 'Profile Progress',
	}),
];

const MyComponent = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [data] = useState<Product[]>(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		// debugTable: true,
	});
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Table</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button icon='HeroLink' color='zinc' variant='outline'>
						Click
					</Button>
					<Button icon='HeroCloudArrowDown' variant='solid'>
						Click
					</Button>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<Table className='table-fixed'>
					<THead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Th
										key={header.id}
										isColumnBorder={false}
										className='text-left'>
										{header.isPlaceholder ? null : (
											<div
												key={header.id}
												aria-hidden='true'
												{...{
													className: header.column.getCanSort()
														? 'cursor-pointer select-none flex items-center'
														: '',
													onClick:
														header.column.getToggleSortingHandler(),
												}}>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
												{{
													asc: (
														<Icon
															icon='HeroChevronUp'
															className='ltr:ml-1.5 rtl:mr-1.5'
														/>
													),
													desc: (
														<Icon
															icon='HeroChevronDown'
															className='ltr:ml-1.5 rtl:mr-1.5'
														/>
													),
												}[header.column.getIsSorted() as string] ?? null}
											</div>
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
									<Th
										key={header.id}
										isColumnBorder={false}
										className='text-left'>
										{header.isPlaceholder ? null : (
											<div
												key={header.id}
												aria-hidden='true'
												{...{
													className: header.column.getCanSort()
														? 'cursor-pointer select-none flex items-center'
														: '',
													onClick:
														header.column.getToggleSortingHandler(),
												}}>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
												{{
													asc: (
														<Icon
															icon='HeroChevronUp'
															className='ltr:ml-1.5 rtl:mr-1.5'
														/>
													),
													desc: (
														<Icon
															icon='HeroChevronDown'
															className='ltr:ml-1.5 rtl:mr-1.5'
														/>
													),
												}[header.column.getIsSorted() as string] ?? null}
											</div>
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
