'use client';

import React, { useState } from 'react';
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
import rolesDb, { TRole } from '@/mocks/db/roles.db';
import { appPages } from '@/config/pages.config';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import TableTemplate, { TableCardFooterTemplate } from '@/templates/common/TableParts.template';
import { modulesDbList } from '@/mocks/db/modules.db';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';

const columnHelper = createColumnHelper<TRole>();

const editLinkPath = `${appPages.crmAppPages.subPages.rolePage.subPages.editPageLink.to}/`;

const columns = [
	columnHelper.accessor('name', {
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<div className='font-bold'>{info.getValue()}</div>
			</Link>
		),
		header: 'Name',
		footer: 'Name',
	}),
	columnHelper.display({
		cell: (info) => (
			<div className='flex gap-2'>
				{Object.keys(info.row.original.modules).map((m, index) => (
					<Badge
						variant='outline'
						rounded='rounded-full'
						className='border-transparent'
						key={m}>
						<span className='me-2'>
							{
								// @ts-ignore
								// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
								modulesDbList[`${m}`].name
							}
						</span>
						<b>{Object.values(info.row.original.modules)[index]}</b>
					</Badge>
				))}
			</div>
		),
		header: 'Permissions',
		footer: 'Permissions',
	}),
	columnHelper.display({
		cell: (info) => (
			<Link href={`${editLinkPath}${info.row.original.id}`}>
				<Button>Edit</Button>
			</Link>
		),
		header: 'Actions',
		footer: 'Actions',
	}),
];

const RoleListClient = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [data] = useState<TRole[]>(() => [...rolesDb]);

	const [globalFilter, setGlobalFilter] = useState<string>('');

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
					<Button variant='solid' icon='HeroPlus' isDisable>
						New Role
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container>
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
						<TableTemplate className='table-fixed max-md:min-w-[70rem]' table={table} />
					</CardBody>
					<TableCardFooterTemplate table={table} />
				</Card>
			</Container>
		</PageWrapper>
	);
};

export default RoleListClient;
