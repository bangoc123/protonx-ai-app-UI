'use client';

import React, { useState } from 'react';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import usersDb, { TUser } from '@/mocks/db/users.db';
import { appPages } from '@/config/pages.config';
import Avatar from '@/components/Avatar';
import Icon from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';
import TableTemplate, { TableCardFooterTemplate } from '@/templates/common/TableParts.template';
import Input from '@/components/form/Input';
import FieldWrap from '@/components/form/FieldWrap';
import Link from 'next/link';

const columnHelper = createColumnHelper<TUser>();

const editLinkPath = `${appPages.crmAppPages.subPages.customerPage.subPages.editPageLink.to}/`;

const columns = [
	columnHelper.accessor('image', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<Avatar
					src={info.getValue()?.thumb}
					name={`${info.row.original.firstName} ${info.row.original.lastName}`}
					className='!w-10'
					rounded='rounded-full'
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

const UserListPartial = () => {
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
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Users</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
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
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<TableTemplate
					className='table-fixed max-md:min-w-[70rem]'
					table={table}
					hasFooter={false}
				/>
			</CardBody>
			<TableCardFooterTemplate table={table} />
		</Card>
	);
};

export default UserListPartial;
