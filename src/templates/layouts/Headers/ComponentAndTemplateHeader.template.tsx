'use client';

import React from 'react';
import { componentsPages } from '@/config/pages.config';
import { usePathname } from 'next/navigation';
import Header, { HeaderLeft, HeaderRight } from '../../../components/layouts/Header/Header';
import Button from '../../../components/ui/Button';
import Dropdown, {
	DropdownMenu,
	DropdownNavLinkItem,
	DropdownToggle,
} from '../../../components/ui/Dropdown';
import DefaultHeaderRightCommon from './_common/DefaultHeaderRight.common';

const ComponentAndTemplateHeaderTemplate = () => {
	const pathname = usePathname();

	return (
		<Header>
			<HeaderLeft>
				<Dropdown className='max-md:hidden'>
					<DropdownToggle hasIcon={false}>
						<Button
							variant={
								pathname.includes(componentsPages.uiPages.to)
									? 'outline'
									: 'default'
							}
							color={pathname.includes(componentsPages.uiPages.to) ? 'zinc' : 'blue'}
							icon={componentsPages.uiPages.icon}>
							{componentsPages.uiPages.text}
						</Button>
					</DropdownToggle>
					<DropdownMenu>
						<div className='grid grid-cols-12 gap-4 divide-x divide-zinc-200 dark:divide-zinc-800'>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.uiPages.subPages)
									.slice(0, 6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.uiPages.subPages)
									.slice(6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
						</div>
					</DropdownMenu>
				</Dropdown>
				<Dropdown className='max-md:hidden'>
					<DropdownToggle hasIcon={false}>
						<Button
							variant={
								pathname.includes(componentsPages.formPages.to)
									? 'outline'
									: 'default'
							}
							color={
								pathname.includes(componentsPages.formPages.to) ? 'zinc' : 'blue'
							}
							icon={componentsPages.formPages.icon}>
							{componentsPages.formPages.text}
						</Button>
					</DropdownToggle>
					<DropdownMenu>
						<div className='grid grid-cols-12 gap-4 divide-x divide-zinc-200 dark:divide-zinc-800'>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.formPages.subPages)
									.slice(0, 6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.formPages.subPages)
									.slice(6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
						</div>
					</DropdownMenu>
				</Dropdown>
				<Dropdown className='max-md:hidden'>
					<DropdownToggle hasIcon={false}>
						<Button
							variant={
								pathname.includes(componentsPages.integratedPages.to)
									? 'outline'
									: 'default'
							}
							color={
								pathname.includes(componentsPages.integratedPages.to)
									? 'zinc'
									: 'blue'
							}
							icon={componentsPages.integratedPages.icon}>
							{componentsPages.integratedPages.text}
						</Button>
					</DropdownToggle>
					<DropdownMenu>
						<div className='grid grid-cols-12 gap-4 divide-x divide-zinc-200 dark:divide-zinc-800'>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.integratedPages.subPages)
									.slice(0, 6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
							<div className='col-span-6 gap-4'>
								{Object.values(componentsPages.integratedPages.subPages)
									.slice(6)
									.map((item) => (
										<DropdownNavLinkItem
											key={item.id}
											to={item.to}
											icon={item.icon}>
											{item.text}
										</DropdownNavLinkItem>
									))}
							</div>
						</div>
					</DropdownMenu>
				</Dropdown>
			</HeaderLeft>
			<HeaderRight>
				<DefaultHeaderRightCommon />
			</HeaderRight>
		</Header>
	);
};

export default ComponentAndTemplateHeaderTemplate;
