'use client';

import React, { FC, useEffect, useRef } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import projectsDb, { TProject } from '@/mocks/db/projects.db';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Link from 'next/link';
import { appPages } from '@/config/pages.config';
import Image, { StaticImageData } from 'next/image';
import Icon from '@/components/icon/Icon';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import Header, { HeaderLeft, HeaderRight } from '@/components/layouts/Header/Header';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import DefaultHeaderRightCommon from '@/templates/layouts/Headers/_common/DefaultHeaderRight.common';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/form/Checkbox';
import dayjs from 'dayjs';
import Container from '@/components/layouts/Container/Container';
import NewProjectButtonPartial from '@/app/[locale]/project/_partial/NewProjectButton.partial';

interface IProjectItemProps {
	project: TProject;
}

const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	return (
		<Card className='w-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>
						<Link href={`${appPages.projectAppPages.subPages.projectBoardPage.to}`}>
							{project.name}
						</Link>
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='flex flex-wrap gap-4'>
					<div className='text-zinc-500'>{project.description}</div>

					{/* Only image */}
					{/* @ts-ignore */}
					{project.image?.length === 1 && (
						<div>
							<Image
								// @ts-ignore
								// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
								src={project.image[0]}
								alt={project.name}
								className='aspect-video rounded-lg object-cover'
							/>
						</div>
					)}

					{/* Multiple images */}
					{typeof project.image !== 'undefined' &&
						typeof project.image === 'object' &&
						// @ts-ignore
						project.image?.length > 1 && (
							<div className='grid grid-cols-12 gap-4'>
								{
									// @ts-ignore
									// eslint-disable-next-line @typescript-eslint/no-unsafe-call
									project.image.map(
										(
											i: React.Key | StaticImport | null | undefined,
											index: number,
										) =>
											index < 3 && (
												<Image
													className='col-span-3 aspect-video rounded-lg object-cover'
													key={i as string}
													src={i as StaticImageData}
													alt={project.name}
												/>
											),
									)
								}
								{/* @ts-ignore */}
								{project.image.length > 3 && (
									<div
										className='col-span-3 overflow-hidden rounded-lg bg-cover'
										style={{
											// @ts-ignore
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											backgroundImage: `url(${project.image[3]})`,
										}}>
										<div className='flex h-full w-full items-center justify-center font-semibold backdrop-blur'>
											+
											{
												// @ts-ignore
												project.image.length - 3
											}
										</div>
									</div>
								)}
							</div>
						)}
				</div>
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					{project.users && (
						<>
							<div className='flex -space-x-2 overflow-hidden'>
								{project.users.map(
									(user, index) =>
										index < 5 && (
											<Image
												key={user.id}
												// @ts-ignore
												src={user.image?.thumb}
												alt={`${user.firstName} ${user.lastName}`}
												className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
											/>
										),
								)}
							</div>
							{project.users.length > 5 && (
								<div className='-ms-2 flex h-8 w-auto min-w-[2rem] items-center justify-center rounded-full border border-dashed border-zinc-500 px-1 text-sm text-zinc-500'>
									{project.users.length - 5}
								</div>
							)}
						</>
					)}
				</CardFooterChild>
				<CardFooterChild>
					<div className='flex gap-4'>
						{project.comments && (
							<div className='flex items-center gap-2 text-amber-500'>
								<Icon icon='HeroChatBubbleBottomCenterText' />
								<div>{project.comments?.length}</div>
							</div>
						)}
						{project.image && (
							<div className='flex items-center gap-2 text-blue-500'>
								<Icon icon='HeroPaperClip' />
								{/* @ts-ignore */}
								<div>{project.image?.length}</div>
							</div>
						)}
					</div>
				</CardFooterChild>
			</CardFooter>
		</Card>
	);
};

const ProjectDashboardClient = () => {
	const { i18n } = useTranslation();

	const formik = useFormik({
		initialValues: {
			projects: projectsDb.map((project) => project.id),
			selectAll: false,
		},
		onSubmit: () => {},
	});

	const filteredProjects = projectsDb.filter((project) =>
		formik.values.projects.includes(project.id),
	);

	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (projectsDb.length > filteredProjects.length) {
				ref.current.checked = false;
				ref.current.indeterminate = true;
			} else {
				ref.current.checked = false;
				ref.current.indeterminate = false;
			}
		}
		return () => {};
	}, [filteredProjects.length]);

	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb path='Pages / Dashboard' currentPage='Project' />
				</HeaderLeft>
				<HeaderRight>
					<DefaultHeaderRightCommon />
				</HeaderRight>
			</Header>
			<PageWrapper>
				<Subheader>
					<SubheaderLeft>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button
									icon='HeroRectangleGroup'
									variant='outline'
									rounded='rounded-full'
									color='zinc'>
									All Projects
								</Button>
							</DropdownToggle>
							<DropdownMenu className='p-4'>
								<Checkbox
									ref={ref}
									dimension='sm'
									name='selectAll'
									label='Select All'
									onChange={() => {
										formik
											.setFieldValue('selectAll', true)
											.then(() => {})
											.catch(() => {});
										formik
											.setFieldValue(
												'projects',
												projectsDb.map((project) => project.id),
											)
											.then(() => {})
											.catch(() => {});
									}}
									checked={projectsDb.length === filteredProjects.length}
								/>
								{projectsDb.map((project) => (
									<Checkbox
										key={project.id}
										className='ms-4'
										dimension='sm'
										id={project.id}
										name='projects'
										label={project.name}
										onChange={formik.handleChange}
										checked={formik.values.projects?.includes(project.id)}
									/>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button
									icon='HeroBarsArrowDown'
									variant='outline'
									rounded='rounded-full'
									color='zinc'>
									Sort
								</Button>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem icon='HeroBarsArrowDown'>
									Sort from A to Z
								</DropdownItem>
								<DropdownItem icon='HeroBarsArrowUp'>Sort from Z to A</DropdownItem>
								<div className='h-0.5 bg-zinc-500/50' />
								<DropdownItem icon='HeroBarsArrowDown'>
									Sort from A to Z
								</DropdownItem>
								<DropdownItem icon='HeroBarsArrowUp'>Sort from Z to A</DropdownItem>
							</DropdownMenu>
						</Dropdown>

						<Button
							icon='HeroEyeDropper'
							variant='outline'
							rounded='rounded-full'
							color='zinc'>
							Customize
						</Button>
						<div className='relative'>
							<Button
								icon='HeroFunnel'
								variant='outline'
								rounded='rounded-full'
								color='zinc'>
								Filter
							</Button>
							<span className='absolute end-0 top-0 flex h-3 w-3'>
								<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75' />
								<span className='relative inline-flex h-3 w-3 rounded-full bg-violet-500' />
							</span>
						</div>
					</SubheaderLeft>
					<SubheaderRight>
						<div className='text-end'>
							<div>{dayjs().locale(i18n.language).format('LL')}</div>
							<div className='flex items-center gap-1 text-xs'>
								<span className='flex h-2 w-2 rounded-full bg-emerald-500' />
								<span>Edited 3 hours ago</span>
							</div>
						</div>
					</SubheaderRight>
				</Subheader>
				<Container>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-12 md:col-span-6 xl:col-span-3'>
							<Card className='!bg-zinc-900/5 dark:!bg-zinc-900/50'>
								<CardHeader>
									<CardHeaderChild>
										<span className='flex h-3 w-3 rounded-full bg-amber-500' />
										<CardTitle>Backlog</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button icon='HeroEllipsisVertical' />
											</DropdownToggle>
											<DropdownMenu placement='bottom-end'>
												<DropdownItem icon='HeroArchiveBox'>
													Archived items
												</DropdownItem>
												<DropdownItem icon='HeroCog8Tooth'>
													Settings
												</DropdownItem>
												<DropdownItem icon='HeroClipboardDocument'>
													Make a copy
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<NewProjectButtonPartial />
								</CardBody>
								<CardBody>
									<div className='flex flex-wrap gap-4'>
										{filteredProjects
											.filter((filter) => filter.status === 'backlog')
											.map((project) => (
												<ProjectItem key={project.id} project={project} />
											))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-span-12 md:col-span-6 xl:col-span-3'>
							<Card className='!bg-zinc-900/5 dark:!bg-zinc-900/50'>
								<CardHeader>
									<CardHeaderChild>
										<span className='flex h-3 w-3 rounded-full bg-blue-500' />
										<CardTitle>In Progress</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button icon='HeroEllipsisVertical' />
											</DropdownToggle>
											<DropdownMenu placement='bottom-end'>
												<DropdownItem icon='HeroArchiveBox'>
													Archived items
												</DropdownItem>
												<DropdownItem icon='HeroCog8Tooth'>
													Settings
												</DropdownItem>
												<DropdownItem icon='HeroClipboardDocument'>
													Make a copy
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<NewProjectButtonPartial />
								</CardBody>
								<CardBody>
									<div className='flex flex-wrap gap-4'>
										{filteredProjects
											.filter((filter) => filter.status === 'inProgress')
											.map((project) => (
												<ProjectItem key={project.id} project={project} />
											))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-span-12 md:col-span-6 xl:col-span-3'>
							<Card className='!bg-zinc-900/5 dark:!bg-zinc-900/50'>
								<CardHeader>
									<CardHeaderChild>
										<span className='flex h-3 w-3 rounded-full bg-emerald-500' />
										<CardTitle>Completed</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button icon='HeroEllipsisVertical' />
											</DropdownToggle>
											<DropdownMenu placement='bottom-end'>
												<DropdownItem icon='HeroArchiveBox'>
													Archived items
												</DropdownItem>
												<DropdownItem icon='HeroCog8Tooth'>
													Settings
												</DropdownItem>
												<DropdownItem icon='HeroClipboardDocument'>
													Make a copy
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<NewProjectButtonPartial />
								</CardBody>
								<CardBody>
									<div className='flex flex-wrap gap-4'>
										{filteredProjects
											.filter((filter) => filter.status === 'completed')
											.map((project) => (
												<ProjectItem key={project.id} project={project} />
											))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-span-12 md:col-span-6 xl:col-span-3'>
							<Card className='!bg-zinc-900/5 dark:!bg-zinc-900/50'>
								<CardBody>
									<NewProjectButtonPartial />
								</CardBody>
							</Card>
						</div>
					</div>
				</Container>
			</PageWrapper>
		</>
	);
};

export default ProjectDashboardClient;
