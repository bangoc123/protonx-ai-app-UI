import React, { useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import productsDb, { TProduct } from '@/mocks/db/products.db';
import { appPages } from '@/config/pages.config';
import Link from 'next/link';
import priceFormat from '@/utils/priceFormat.util';
import Progress from '@/components/ui/Progress';
import Badge from '@/components/ui/Badge';
import { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Table, { TBody, Td, TFoot, Th, THead, Tr } from '@/components/ui/Table';
import Icon from '@/components/icon/Icon';
import Image from 'next/image';

const defaultData: TProduct[] = [
	productsDb[0],
	productsDb[1],
	productsDb[2],
	productsDb[3],
	productsDb[4],
];

const columnHelper = createColumnHelper<TProduct>();

const editLinkPath = `../${appPages.salesAppPages.subPages.productPage.subPages.editPageLink.to}/`;

const columns = [
	columnHelper.accessor('image', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<Image
					className='aspect-[9/12] w-14 rounded object-cover 2xl:w-20'
					src={info.getValue().thumb}
					alt=''
				/>
			</Link>
		),
		header: 'Image',
		footer: 'Image',
	}),
	columnHelper.accessor('productName', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<div className='font-bold'>{info.getValue()}</div>
				<div className='text-sm'>
					<b className='me-0.5'>SKU:</b>
					{info.row.original.SKU}
				</div>
			</Link>
		),
	}),
	columnHelper.accessor('price', {
		cell: (info) => priceFormat(info.getValue()),
		header: 'Price',
		footer: 'Price',
	}),
	columnHelper.accessor('views', {
		cell: (info) => <Progress value={info.getValue()} rounded='rounded' />,
		header: 'Views',
		footer: 'Views',
	}),
	columnHelper.accessor('stock', {
		cell: (info) => (
			<Badge variant='outline' color={info.getValue().color} className='!border-transparent'>
				{info.getValue().text}
			</Badge>
		),
		header: 'Stock',
		footer: 'Stock',
	}),
	columnHelper.accessor('likes', {
		header: 'Likes',
		footer: 'Likes',
	}),
];

const TablePartial = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [data] = useState<TProduct[]>(() => [...defaultData]);

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
		<>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Popular Products</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button color='zinc' variant='outline'>
						All Products
					</Button>
					<Button icon='HeroCloudArrowDown' variant='solid'>
						Click
					</Button>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<Table className='table-fixed max-md:min-w-[70rem]'>
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
		</>
	);
};

export default TablePartial;
