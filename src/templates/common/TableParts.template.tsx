import React, { FC } from 'react';
import classNames from 'classnames';
import { flexRender, Table as TTableProps } from '@tanstack/react-table';
import { CardFooter, CardFooterChild } from '@/components/ui/Card';
import Mounted from '@/components/Mounted';
import Table, { ITableProps, TBody, Td, TFoot, Th, THead, Tr } from '../../components/ui/Table';
import Icon from '../../components/icon/Icon';
import Button from '../../components/ui/Button';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';

interface ITableHeaderTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableHeaderTemplate: FC<ITableHeaderTemplateProps> = ({ table }) => {
	return (
		<THead>
			{table.getHeaderGroups().map((headerGroup) => (
				<Tr key={headerGroup.id}>
					{headerGroup.headers.map((header) => (
						<Th
							key={header.id}
							isColumnBorder={false}
							className={classNames({
								'text-left': header.id !== 'Actions',
								'text-right': header.id === 'Actions',
							})}>
							{header.isPlaceholder ? null : (
								<div
									key={header.id}
									aria-hidden='true'
									{...{
										className: header.column.getCanSort()
											? 'cursor-pointer select-none flex items-center'
											: '',
										onClick: header.column.getToggleSortingHandler(),
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
	);
};

interface ITableBodyTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableBodyTemplate: FC<ITableBodyTemplateProps> = ({ table }) => {
	return (
		<TBody>
			{table.getRowModel().rows.map((row) => (
				<Tr key={row.id}>
					{row.getVisibleCells().map((cell) => (
						<Td
							key={cell.id}
							className={classNames({
								'text-left': cell.column.id !== 'Actions',
								'text-right': cell.column.id === 'Actions',
							})}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</Td>
					))}
				</Tr>
			))}
		</TBody>
	);
};

interface ITableFooterTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableFooterTemplate: FC<ITableFooterTemplateProps> = ({ table }) => {
	return (
		<TFoot>
			{table.getFooterGroups().map((footerGroup) => (
				<Tr key={footerGroup.id}>
					{footerGroup.headers.map((header) => (
						<Th
							key={header.id}
							isColumnBorder={false}
							className={classNames({
								'text-left': header.id !== 'Actions',
								'text-right': header.id === 'Actions',
							})}>
							{header.isPlaceholder ? null : (
								<div
									key={header.id}
									aria-hidden='true'
									{...{
										className: header.column.getCanSort()
											? 'cursor-pointer select-none flex items-center'
											: '',
										onClick: header.column.getToggleSortingHandler(),
									}}>
									{flexRender(
										header.column.columnDef.footer,
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
	);
};

interface ITableTemplateProps extends Partial<ITableProps> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
	hasHeader?: boolean;
	hasFooter?: boolean;
}
const TableTemplate: FC<ITableTemplateProps> = (props) => {
	const { children, hasHeader = true, hasFooter = true, table, ...rest } = props;

	return (
		<Mounted>
			<Table {...rest}>
				{children || (
					<>
						{hasHeader && <TableHeaderTemplate table={table} />}
						<TableBodyTemplate table={table} />
						{hasFooter && <TableFooterTemplate table={table} />}
					</>
				)}
			</Table>
		</Mounted>
	);
};

interface ITableCardFooterTemplateProps extends Partial<ITableProps> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableCardFooterTemplate: FC<ITableCardFooterTemplateProps> = ({ table }) => {
	return (
		<CardFooter>
			<CardFooterChild>
				<Select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
					className='!w-fit'
					name='pageSize'>
					{[5, 10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</Select>
			</CardFooterChild>
			<CardFooterChild>
				<Button
					onClick={() => table.setPageIndex(0)}
					isDisable={!table.getCanPreviousPage()}
					icon='HeroChevronDoubleLeft'
					className='!px-0'
				/>
				<Button
					onClick={() => table.previousPage()}
					isDisable={!table.getCanPreviousPage()}
					icon='HeroChevronLeft'
					className='!px-0'
				/>
				<span className='flex items-center gap-1'>
					<div>Page</div>
					<strong>
						<Input
							value={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className='inline-flex !w-12 text-center'
							name='page'
						/>{' '}
						of {table.getPageCount()}
					</strong>
				</span>
				<Button
					onClick={() => table.nextPage()}
					isDisable={!table.getCanNextPage()}
					icon='HeroChevronRight'
					className='!px-0'
				/>
				<Button
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					isDisable={!table.getCanNextPage()}
					icon='HeroChevronDoubleRight'
					className='!px-0'
				/>
			</CardFooterChild>
		</CardFooter>
	);
};

export default TableTemplate;
