'use client';

import React, { useState } from 'react';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Mounted from '@/components/Mounted';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownNavLinkItem,
	DropdownToggle,
} from '@/components/ui/Dropdown';
import TableTemplate, { TableCardFooterTemplate } from '@/templates/common/TableParts.template';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import productsDb, { TProduct } from '@/mocks/db/products.db';
import { appPages } from '@/config/pages.config';
import Image from 'next/image';
import priceFormat from '@/utils/priceFormat.util';
import Progress from '@/components/ui/Progress';

const columnHelper = createColumnHelper<TProduct>();

const editLinkPath = `${appPages.salesAppPages.subPages.productPage.subPages.editPageLink.to}/`;

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
		enableGlobalFilter: false,
		enableSorting: false,
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
		header: 'Product Name',
		footer: 'Product Name',
	}),
	columnHelper.accessor('price', {
		cell: (info) => (
			<span className='text-xl font-bold'>{priceFormat(Number(info.getValue()))}</span>
		),
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

const ProductListClient = () => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState<string>('');

	const [data] = useState<TProduct[]>(() => [...productsDb]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: { pageSize: 5 },
		},
		// debugTable: true,
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Mounted>
						<FieldWrap
							firstSuffix={<Icon className='mx-2' icon='HeroMagnifyingGlass' />}
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
								placeholder='Search...'
								value={globalFilter ?? ''}
								onChange={(e) => setGlobalFilter(e.target.value)}
							/>
						</FieldWrap>
					</Mounted>
				</SubheaderLeft>
				<SubheaderRight>
					<Link href={`${editLinkPath}new`}>
						<Button variant='solid' icon='HeroPlus'>
							New Product
						</Button>
					</Link>
				</SubheaderRight>
			</Subheader>
			<Container>
				<Card className='h-full'>
					<CardHeader>
						<CardHeaderChild>
							<CardTitle>All Products</CardTitle>
							<Badge
								variant='outline'
								className='border-transparent px-4'
								rounded='rounded-full'>
								{table.getFilteredRowModel().rows.length} items
							</Badge>
						</CardHeaderChild>
						<CardHeaderChild>
							<Dropdown>
								<DropdownToggle>
									<Button icon='HeroRocketLaunch'>Actions</Button>
								</DropdownToggle>
								<DropdownMenu placement='bottom-end'>
									<div className='grid grid-cols-12 gap-4 divide-zinc-200 dark:divide-zinc-800 md:divide-x'>
										<div className='col-span-12 gap-4 md:col-span-3'>
											<DropdownNavLinkItem to='/' icon='HeroLink'>
												Home Page
											</DropdownNavLinkItem>
											<DropdownNavLinkItem to='/ui/dropdown' icon='HeroLink'>
												Dropdown
											</DropdownNavLinkItem>
											<DropdownItem icon='HeroSquare2Stack'>
												Item 3
											</DropdownItem>
										</div>
										<div className='col-span-12 gap-4 md:col-span-3'>
											<DropdownItem icon='HeroSquare2Stack'>
												Item 4
											</DropdownItem>
											<DropdownItem icon='HeroSquare2Stack'>
												Item 5
											</DropdownItem>
											<DropdownItem icon='HeroSquare2Stack'>
												Item 6
											</DropdownItem>
										</div>
										<div className='col-span-12 gap-4 px-4 md:col-span-6'>
											Lorem ipsum dolor sit amet.
										</div>
									</div>
								</DropdownMenu>
							</Dropdown>
						</CardHeaderChild>
					</CardHeader>
					<CardBody className='overflow-auto'>
						<TableTemplate className='table-fixed max-md:min-w-[70rem]' table={table} />
					</CardBody>
					<TableCardFooterTemplate table={table} />
				</Card>
			</Container>
		</PageWrapper>
	);
};

export default ProductListClient;
