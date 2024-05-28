'use client';

import React from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layouts/Subheader/Subheader';
import { useParams } from 'next/navigation';
import categoriesDb from '@/mocks/db/categories.db';
import { useFormik } from 'formik';
import Link from 'next/link';
import { appPages } from '@/config/pages.config';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import Radio, { RadioGroup } from '@/components/form/Radio';
import { arrColors } from '@/types/colors.type';
import Checkbox from '@/components/form/Checkbox';

const CategoryClient = () => {
	const { slug: id } = useParams();

	// const isNewItem = id === 'new';
	/**
	 * For demo
	 */
	const defaultCategoryId = id === ':id' ? categoriesDb[0].id : id;
	const categoryDb = categoriesDb.find((i) => i.id === defaultCategoryId);

	const formik = useFormik({
		initialValues: {
			id: categoryDb?.id,
			name: categoryDb?.name,
			color: categoryDb?.color,
			status: categoryDb?.status,
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Link
						href={`${appPages.salesAppPages.subPages.categoryPage.subPages.listPage.to}`}>
						<Button icon='HeroArrowLeft' className='!px-0'>
							Back to List
						</Button>
					</Link>
					<SubheaderSeparator />
					{formik.values.name ? `${formik.values.name} - Edit` : 'New Category'}
				</SubheaderLeft>
				<SubheaderRight>
					<Button variant='solid'>Save</Button>
				</SubheaderRight>
			</Subheader>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<h1 className='my-4 font-bold'>Category Edit</h1>
					</div>
					<div className='col-span-12'>
						<Card>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle>General Info</CardTitle>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 lg:col-span-6'>
										<Label htmlFor='id'>ID</Label>
										<Input
											id='id'
											name='id'
											onChange={formik.handleChange}
											value={formik.values.id}
											disabled
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Label htmlFor='name'>Name</Label>
										<Input
											id='name'
											name='name'
											onChange={formik.handleChange}
											value={formik.values.name}
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Label htmlFor='color'>Color</Label>
										<RadioGroup isInline>
											{arrColors.map((color) => (
												<Radio
													key={color}
													label={
														<div
															className={`flex items-center gap-2 rounded-full p-2 bg-${color}-500/10`}>
															<div
																className={`bg-${color}-500 h-5 w-5 rounded-full`}
															/>
															<div className='capitalize'>
																{color}
															</div>
														</div>
													}
													name='color'
													selectedValue={formik.values.color}
													onChange={formik.handleChange}
													value={color}
													color={color}
												/>
											))}
										</RadioGroup>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Label htmlFor='color'>Status</Label>
										<Checkbox
											variant='switch'
											id='status'
											name='status'
											onChange={formik.handleChange}
											checked={formik.values.status}
											label={formik.values.status ? 'Active' : 'Passive'}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default CategoryClient;
