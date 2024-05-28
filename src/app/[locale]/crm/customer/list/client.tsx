'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import {
	SortingState,
	createColumnHelper,
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table';
import usersDb, { TUser } from '@/mocks/db/users.db';
import { appPages } from '@/config/pages.config';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import Icon from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
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

const columnHelper = createColumnHelper<TUser>();

const editLinkPath = `${appPages.crmAppPages.subPages.customerPage.subPages.editPageLink.to}/`;

const columns = [
	columnHelper.accessor('image', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<Avatar
					src={info.getValue()?.thumb}
					name={`${info.row.original.firstName} ${info.row.original.lastName}`}
					className='!aspect-[9/12] !w-14 2xl:!w-20'
					rounded='rounded'
				/>
			</Link>
		),
		header: 'Image',
		footer: 'Image',
		enableGlobalFilter: false,
		enableSorting: false,
	}),
	columnHelper.accessor('username', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<div className='font-bold'>{`${info.row.original.firstName} ${info.row.original.lastName}`}</div>
				<div className='text-sm'>@{info.getValue()}</div>
			</Link>
		),
		header: 'Username',
		footer: 'Username',
	}),
	columnHelper.accessor('email', {
		cell: (info) => (
			<a href={`mailto:${info.getValue()}`} className='flex items-center gap-2'>
				{info.getValue()}
				{info.row.original.isVerified && <Icon icon='HeroCheckBadge' color='blue' />}
			</a>
		),
		header: 'Email',
		footer: 'Email',
	}),
	columnHelper.accessor('position', {
		cell: (info) => <span>{info.getValue()}</span>,
		header: 'Position',
		footer: 'Position',
	}),
	columnHelper.display({
		cell: (info) => (
			<div className='flex items-center gap-2'>
				{info.row.original.socialAuth?.google && (
					<Tooltip text='Google'>
						<Icon size='text-xl' icon='CustomGoogle' />
					</Tooltip>
				)}
				{info.row.original.socialAuth?.facebook && (
					<Tooltip text='Facebook'>
						<Icon size='text-xl' icon='CustomFacebook' />
					</Tooltip>
				)}
				{info.row.original.socialAuth?.apple && (
					<Tooltip text='Apple'>
						<Icon size='text-xl' icon='CustomApple' />
					</Tooltip>
				)}
			</div>
		),
		header: 'Social Account',
		footer: 'Social Account',
	}),
];

const CustomerListClient = () => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState<string>('');

	const [data] = useState<TUser[]>(() => [...usersDb]);

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
				</SubheaderLeft>
				<SubheaderRight>
					<Link href={`${editLinkPath}new`}>
						<Button variant='solid' icon='HeroPlus'>
							New Customer
						</Button>
					</Link>
				</SubheaderRight>
			</Subheader>
			<Container>
				<Card className='h-full'>
					<CardHeader>
						<CardHeaderChild>
							<CardTitle>All Customers</CardTitle>
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

export default CustomerListClient;
