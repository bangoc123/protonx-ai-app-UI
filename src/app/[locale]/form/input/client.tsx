'use client';

import React, { useRef, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft } from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import useScrollSpy from 'react-use-scrollspy';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '@/templates/for-demo/Doc';
import ExampleView from '@/templates/for-demo/ExampleView';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import MdViewer from '@/components/MdViewer';
import { useFormik } from 'formik';
import Label from '@/components/form/Label';
import FieldWrap from '@/components/form/FieldWrap';
import Input, { TInputDimension, TInputVariants } from '@/components/form/Input';
import Icon from '@/components/icon/Icon';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import { TInputTypes } from '@/types/input.type';
import FieldWrapExample2MD from '../field-wrap/_md/FieldWrapExample1.md';
import FieldWrapExample1MD from '../field-wrap/_md/FieldWrapExample2.md';
import InputInterfaceMD from './_md/InputInterface.md';

const InputClient = () => {
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	const formik = useFormik({
		initialValues: {
			urlAddress: '',
			urlAddressDisable: 'google.com',
			password: 'Asd123!',
			example: '',
			color: '',
			date: '',
			'datetime-local': '',
			email: '',
			file: '',
			hidden: '',
			month: '',
			number: '',
			range: '',
			search: '',
			tel: '',
			text: '',
			time: '',
			url: '',
			week: '',
		},
		onSubmit: () => {},
	});

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Input' />
				</SubheaderLeft>
			</Subheader>
			<Container>
				<Doc>
					<DocContent>
						<div
							id='Examples'
							ref={sectionRefs[0]}
							className='scroll-mt-offset col-span-12'>
							<span className='text-3xl font-semibold'>Examples</span>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 1' mdFile={FieldWrapExample1MD as string}>
								<Card>
									<CardBody>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12 md:col-span-6'>
												<Label htmlFor='urlAddress'>Website Address</Label>
												<FieldWrap
													firstSuffix='https://'
													lastSuffix={
														<Button
															className='ms-2'
															variant='solid'
															rounded='rounded'
															icon='HeroArrowTopRightOnSquare'
															size='sm'
															isDisable={!formik.values.urlAddress}
														/>
													}>
													<Input
														type='url'
														id='urlAddress'
														name='urlAddress'
														onChange={formik.handleChange}
														value={formik.values.urlAddress}
														placeholder='example.com'
														autoComplete='url'
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12 md:col-span-6'>
												<Label htmlFor='urlAddressDisable'>
													Website Address (Disable)
												</Label>
												<FieldWrap
													firstSuffix='https://'
													lastSuffix={
														<Button
															className='ms-2'
															variant='solid'
															rounded='rounded'
															icon='HeroArrowTopRightOnSquare'
															size='sm'
															isDisable={
																!formik.values.urlAddressDisable
															}
														/>
													}>
													<Input
														disabled
														type='url'
														id='urlAddressDisable'
														name='urlAddressDisable'
														onChange={formik.handleChange}
														value={formik.values.urlAddressDisable}
														placeholder='google.com'
														autoComplete='url'
													/>
												</FieldWrap>
											</div>
										</div>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={FieldWrapExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='password'>Password</Label>
										<FieldWrap
											firstSuffix={<Icon icon='HeroKey' className='mx-2' />}
											lastSuffix={
												<Icon
													className='mx-2 cursor-pointer'
													icon={
														passwordShowStatus
															? 'HeroEyeSlash'
															: 'HeroEye'
													}
													onClick={() => {
														setPasswordShowStatus(!passwordShowStatus);
													}}
												/>
											}>
											<Input
												type={passwordShowStatus ? 'text' : 'password'}
												id='password'
												name='password'
												onChange={formik.handleChange}
												value={formik.values.password}
												autoComplete='current-password'
											/>
										</FieldWrap>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div
							id='Interface'
							ref={sectionRefs[1]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Interface</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<MdViewer mdFile={InputInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='borderWidth'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>borderWidth?: TBorderWidth;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrBorderWidth.map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>borderWidth {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													borderWidth={i}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='color'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>color?: TColors;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrColors.map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>color {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													color={i}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='colorIntensity'
							ref={sectionRefs[4]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>colorIntensity?: TColorIntensity;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrColorIntensity.map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>colorIntensity {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													colorIntensity={i}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='rounded'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>rounded?: TRounded;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrRounded.map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>rounded {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													rounded={i}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='dimension'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>dimension?: TInputDimension;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['xs', 'sm', 'default', 'lg', 'xl'].map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>dimension {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													dimension={i as TInputDimension}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='type'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>type?: TInputTypes;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{[
											'color',
											'date',
											'datetime-local',
											'email',
											'file',
											'hidden',
											'month',
											'number',
											'password',
											'range',
											'search',
											'tel',
											'text',
											'time',
											'url',
											'week',
										].map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor={i}>type {i}</Label>
												<Input
													id={i}
													name={i}
													onChange={formik.handleChange}
													// @ts-ignore
													// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
													value={formik.values[i]}
													type={i as TInputTypes}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='variant'
							ref={sectionRefs[8]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>variant?: TInputVariants;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['solid'].map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='example'>variant {i}</Label>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
													variant={i as TInputVariants}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
						<Button isActive={activeSection === 1} className='!px-0'>
							<a href='#Interface'>Interface</a>
						</Button>
						<code className='text-xs'>{'<Input />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#borderWidth'>borderWidth</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#dimension'>dimension</a>
						</Button>
						<Button isActive={activeSection === 7}>
							<a href='#type'>type</a>
						</Button>
						<Button isActive={activeSection === 8}>
							<a href='#variant'>variant</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default InputClient;
