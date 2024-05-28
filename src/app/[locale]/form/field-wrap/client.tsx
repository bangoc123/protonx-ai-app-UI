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
import Input from '@/components/form/Input';
import Icon from '@/components/icon/Icon';
import FieldWrapInterfaceMD from './_md/FieldWrapInterface.md';
import FieldWrapExample1MD from './_md/FieldWrapExample1.md';
import FieldWrapExample2MD from './_md/FieldWrapExample2.md';

const FieldWrapClient = () => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null)];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	const formik = useFormik({
		initialValues: {
			urlAddress: '',
			password: 'Asd123!',
			example: '',
		},
		onSubmit: () => {},
	});

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Field Wrap' />
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
									<MdViewer mdFile={FieldWrapInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='firstSuffix'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>firstSuffix?: ReactNode;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>firstSuffix string</Label>
											<FieldWrap firstSuffix='Text'>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>firstSuffix Icon</Label>
											<FieldWrap
												firstSuffix={
													<Icon icon='HeroUser' className='mx-2' />
												}>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>firstSuffix Button</Label>
											<FieldWrap
												firstSuffix={
													<Button
														variant='solid'
														size='sm'
														rounded='rounded'>
														Click
													</Button>
												}>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='lastSuffix'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>lastSuffix?: ReactNode;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>lastSuffix string</Label>
											<FieldWrap lastSuffix='Text'>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>lastSuffix Icon</Label>
											<FieldWrap
												lastSuffix={
													<Icon icon='HeroUser' className='mx-2' />
												}>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12 lg:col-span-4'>
											<Label htmlFor='example'>lastSuffix Button</Label>
											<FieldWrap
												lastSuffix={
													<Button
														variant='solid'
														size='sm'
														rounded='rounded'>
														Click
													</Button>
												}>
												<Input
													id='example'
													name='example'
													onChange={formik.handleChange}
													value={formik.values.example}
												/>
											</FieldWrap>
										</div>
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
						<code className='text-xs'>{'<FieldWrap />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#firstSuffix'>firstSuffix</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#lastSuffix'>lastSuffix</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default FieldWrapClient;
