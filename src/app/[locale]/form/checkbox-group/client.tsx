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
import Checkbox, { CheckboxGroup } from '@/components/form/Checkbox';
import CheckboxGroupInterfaceMD from './_md/CheckboxGroupInterface.md';
import CheckboxGroupExample1MD from './_md/CheckboxGroupExample1.md';
import CheckboxGroupExample2MD from './_md/CheckboxGroupExample2.md';

const CheckboxGroupClient = () => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null)];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	const formik = useFormik({
		initialValues: {
			optionA: true,
			optionB: false,
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Checkbox Group' />
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
							<ExampleView
								title='Example 1'
								mdFile={CheckboxGroupExample1MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='optionA'>Example Checkbox</Label>
										<CheckboxGroup isInline>
											<Checkbox
												label='Option A'
												id='optionA'
												onChange={formik.handleChange}
												checked={formik.values.optionA}
											/>
											<Checkbox
												label='Option B'
												id='optionB'
												onChange={formik.handleChange}
												checked={formik.values.optionB}
											/>
										</CheckboxGroup>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 2'
								mdFile={CheckboxGroupExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='optionA'>Example Checkbox</Label>
										<CheckboxGroup>
											<Checkbox
												label='Option A'
												id='optionA'
												onChange={formik.handleChange}
												checked={formik.values.optionA}
												variant='switch'
											/>
											<Checkbox
												label='Option B'
												id='optionB'
												onChange={formik.handleChange}
												checked={formik.values.optionB}
												variant='switch'
											/>
										</CheckboxGroup>
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
									<MdViewer mdFile={CheckboxGroupInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='isInline'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>isInline?: boolean;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-start gap-4'>
										{[false, true].map((item) => (
											<div key={item.toString()}>
												<Label htmlFor='optionA'>Example Checkbox</Label>
												<CheckboxGroup isInline={item}>
													<Checkbox
														label='Option A'
														id='optionA'
														onChange={formik.handleChange}
														checked={formik.values.optionA}
													/>
													<Checkbox
														label='Option B'
														id='optionB'
														onChange={formik.handleChange}
														checked={formik.values.optionB}
													/>
												</CheckboxGroup>
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
						<code className='text-xs'>{'<CheckboxGroup />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#isInline'>isInline</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default CheckboxGroupClient;
