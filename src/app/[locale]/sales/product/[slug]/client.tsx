'use client';

import React from 'react';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layouts/Subheader/Subheader';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import productsDb from '@/mocks/db/products.db';
import { useFormik } from 'formik';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import RichText from '@/components/RichText';
import { Descendant } from 'slate';
import Radio, { RadioGroup } from '@/components/form/Radio';
import { categoriesDbList } from '@/mocks/db/categories.db';
import Checkbox, { CheckboxGroup } from '@/components/form/Checkbox';
import tagsDb from '@/mocks/db/tags.db';
import { appPages } from '@/config/pages.config';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/icon/Icon';
import classNames from 'classnames';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import priceFormat from '@/utils/priceFormat.util';

const ProductPageClient = ({ params }: { params: { slug: string } }) => {
	const id = params.slug;
	const isNewItem = id === 'new';

	const productDb = productsDb.find((i) => i.id === id);

	const formik = useFormik({
		initialValues: {
			id: productDb?.id,
			productName: productDb?.productName,
			price: productDb?.price,
			views: productDb?.views,
			image: productDb?.image,
			likes: productDb?.likes,
			stock: productDb?.stock,
			description:
				(productDb?.description && (JSON.parse(productDb.description) as Descendant[])) ||
				[],
			sku: productDb?.SKU,
			category: productDb?.category.id,
			tag: productDb?.tag,
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Link
						href={`${appPages.salesAppPages.subPages.productPage.subPages.listPage.to}`}>
						<Button icon='HeroArrowLeft' className='!px-0'>
							Back to List
						</Button>
					</Link>
					<SubheaderSeparator />
					{formik.values.productName
						? `${formik.values.productName} - Edit`
						: 'New Product'}
				</SubheaderLeft>
				<SubheaderRight>
					<Button variant='solid'>Save</Button>
				</SubheaderRight>
			</Subheader>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<h1 className='my-4 font-bold'>Product Edit</h1>
					</div>
					<div className='col-span-12 lg:col-span-9'>
						<div className='grid grid-cols-12 gap-4'>
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
													disabled={!isNewItem}
												/>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='id'>SKU</Label>
												<Input
													id='sku'
													name='sku'
													onChange={formik.handleChange}
													value={formik.values.sku}
												/>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='productName'>Name</Label>
												<Input
													id='productName'
													name='productName'
													onChange={formik.handleChange}
													value={formik.values.productName}
												/>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='price'>Price</Label>
												<Input
													type='number'
													id='price'
													name='price'
													onChange={formik.handleChange}
													value={formik.values.price}
												/>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='adBudget'>views</Label>
												<Input
													type='number'
													id='adBudget'
													name='adBudget'
													onChange={formik.handleChange}
													value={formik.values.views}
													readOnly
												/>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='description'>Description</Label>
												<RichText
													id='description'
													value={formik.values.description}
													handleChange={(event) => {
														formik
															.setFieldValue('description', event)
															.then(() => {})
															.catch(() => {});
													}}
												/>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className='col-span-12'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Category & Tag</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12'>
												<Label htmlFor='category'>Category</Label>
												<RadioGroup isInline>
													{Object.keys(categoriesDbList).map((cat) => (
														<Radio
															key={cat}
															label={categoriesDbList[cat].name}
															name='category'
															value={categoriesDbList[cat].id}
															selectedValue={formik.values.category}
															onChange={formik.handleChange}
															disabled={!categoriesDbList[cat].status}
														/>
													))}
												</RadioGroup>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='tag'>Tag</Label>
												<CheckboxGroup isInline>
													{tagsDb.map((tag) => (
														<Checkbox
															key={tag.id}
															id={tag.id}
															name='tag'
															label={tag.name}
															onChange={formik.handleChange}
															checked={formik.values.tag?.includes(
																tag.id,
															)}
														/>
													))}
												</CheckboxGroup>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className='col-span-12'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Image</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div
											className={classNames(
												'mt-2',
												'flex justify-center',
												'rounded-lg',
												'border border-dashed border-zinc-500/25',
												'px-6 py-10',
												'dark:border-zinc-500/50',
											)}>
											<div className='text-center'>
												<Icon
													icon='HeroPhoto'
													className='mx-auto h-12 w-12'
													color={themeConfig.themeColor}
													colorIntensity={themeConfig.themeColorShade}
												/>
												<div className='mt-4 flex text-sm leading-6 text-gray-500'>
													<label
														htmlFor='file-upload'
														className={classNames(
															'relative',
															'cursor-pointer',
															'rounded-md',
															'font-semibold',
															'text-blue-500',
															'focus-within:outline-none',
															'focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-transparent',
															'hover:text-blue-600',
															themeConfig.transition,
														)}>
														<span>Upload a file</span>
														<input
															id='file-upload'
															name='file-upload'
															type='file'
															className='sr-only'
														/>
													</label>
													<span className='pl-1'>or drag and drop</span>
												</div>
												<p className='text-xs leading-5 text-gray-500'>
													PNG, JPG, GIF up to 10MB
												</p>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
					</div>
					<div className='col-span-12 lg:col-span-3'>
						<Card className='top-scroll-offset sticky'>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle>Preview</CardTitle>
								</CardHeaderChild>
								<CardHeaderChild>
									<Button icon='HeroArrowTopRightOnSquare' />
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='flex flex-col gap-4'>
									{formik.values.image && (
										<Image
											src={formik.values.image.thumb}
											alt=''
											className='aspect-square rounded object-cover'
										/>
									)}
									{(formik.values.productName || formik.values.price) && (
										<div className='flex items-center justify-between'>
											<div>
												<h3>{formik.values.productName}</h3>
											</div>
											<div>
												{formik.values.price && (
													<Badge
														variant='outline'
														color='emerald'
														className='border-transparent text-xl font-bold'>
														{priceFormat(Number(formik.values.price))}
													</Badge>
												)}
											</div>
										</div>
									)}
									{productDb?.user && (
										<div className='flex items-center'>
											{productDb?.user.image?.thumb && (
												<Image
													src={productDb?.user.image?.thumb}
													alt=''
													className='h-10 w-10 flex-none rounded-full'
												/>
											)}
											<div className='ml-4 flex-auto'>
												<div className='font-medium'>
													{productDb?.user?.firstName}{' '}
													{productDb?.user?.lastName}
												</div>
												<div className='text-zinc-500'>
													@{productDb?.user?.username}
												</div>
											</div>
										</div>
									)}
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default ProductPageClient;
