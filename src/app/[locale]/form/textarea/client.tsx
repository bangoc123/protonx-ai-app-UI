'use client';

import React, { useRef } from 'react';
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
import Textarea, { TTextareaDimension, TTextareaVariants } from '@/components/form/Textarea';
import Progress from '@/components/ui/Progress';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import FieldWrapExample2MD from '../field-wrap/_md/FieldWrapExample1.md';
import FieldWrapExample1MD from '../field-wrap/_md/FieldWrapExample2.md';
import TextareaInterfaceMD from './_md/TextareaInterface.md';

const TextareaClient = () => {
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
			messages: '',
			borderWidth: '',
			color: '',
			colorIntensity: '',
			rounded: '',
			dimension: '',
			variant: '',
		},
		onSubmit: () => {},
	});
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Textarea' />
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
											lastSuffix={
												<Button
													className='my-2 -me-0.5 ms-2 h-full'
													variant='solid'
													rounded='rounded-md'
													icon='HeroPaperAirplane'
													size='sm'
													isDisable={!formik.values.messages}>
													Send
												</Button>
											}>
											<Textarea
												id='messages'
												name='messages'
												onChange={formik.handleChange}
												value={formik.values.messages}
												placeholder='Your messages...'
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
										<Label htmlFor='messages'>Messages</Label>
										<Textarea
											id='messages'
											name='messages'
											onChange={formik.handleChange}
											value={formik.values.messages}
											placeholder='Your messages...'
											rows={8}
											maxLength={500}
										/>
										<div className='mt-2 flex items-center gap-4 text-xs text-zinc-500'>
											<div className='flex-shrink-0'>
												Max length:{' '}
												<span className='font-mono'>
													{formik.values.messages.length}
													/500
												</span>
											</div>
											<Progress
												className='!h-2'
												value={formik.values.messages.length}
												max={500}
											/>
										</div>
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
									<MdViewer mdFile={TextareaInterfaceMD as string} />
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
												<Label htmlFor='borderWidth'>borderWidth {i}</Label>
												<Textarea
													id='borderWidth'
													name='borderWidth'
													onChange={formik.handleChange}
													value={formik.values.borderWidth}
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
												<Label htmlFor='color'>color {i}</Label>
												<Textarea
													id='color'
													name='color'
													onChange={formik.handleChange}
													value={formik.values.color}
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
												<Label htmlFor='colorIntensity'>
													colorIntensity {i}
												</Label>
												<Textarea
													id='colorIntensity'
													name='colorIntensity'
													onChange={formik.handleChange}
													value={formik.values.colorIntensity}
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
												<Label htmlFor='rounded'>rounded {i}</Label>
												<Textarea
													id='rounded'
													name='rounded'
													onChange={formik.handleChange}
													value={formik.values.rounded}
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
												<Label htmlFor='dimension'>dimension {i}</Label>
												<Textarea
													id='dimension'
													name='dimension'
													onChange={formik.handleChange}
													value={formik.values.dimension}
													dimension={i as TTextareaDimension}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='variant'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>variant?: TTextareaVariants;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['solid'].map((i) => (
											<div key={i} className='col-span-12 lg:col-span-4'>
												<Label htmlFor='variant'>variant {i}</Label>
												<Textarea
													id='variant'
													name='variant'
													onChange={formik.handleChange}
													value={formik.values.variant}
													variant={i as TTextareaVariants}
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
							<a href='#variant'>variant</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default TextareaClient;
