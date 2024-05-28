'use client';

import React, { useRef } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import useScrollSpy from 'react-use-scrollspy';
import Button from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '@/templates/for-demo/Doc';
import ExampleView from '@/templates/for-demo/ExampleView';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import MdViewer from '@/components/MdViewer';
import { useFormik } from 'formik';
import { Descendant } from 'slate';
import Label from '@/components/form/Label';
import RichText from '@/components/RichText';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import RichTextExample1MD from './_md/RichTextExample1.md';
import RichTextInterfaceMD from './_md/RichTextInterface.md';

const RichTextClient = () => {
	const sectionRefs = [
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
			description: JSON.parse(
				'[{"type":"paragraph","children":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada nisl sed metus maximus imperdiet. Aenean tortor mi, pretium et faucibus elementum, pulvinar ultricies ex. Vivamus pharetra dui interdum, semper diam eget, blandit urna. Etiam eu tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eros mi, vehicula sed ex sed, accumsan posuere leo. Vestibulum auctor aliquam elit, ut maximus felis gravida in. Donec feugiat sit amet est egestas porttitor. Suspendisse egestas nisi nec urna consequat, quis lobortis elit interdum. Pellentesque purus nibh, dignissim porta tincidunt id, convallis id lectus. In varius ipsum non turpis suscipit, ac ultrices nisi congue. Phasellus eget lectus eget dui sodales sollicitudin ut a nisi."}]}]',
			) as Descendant[],
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='RichText' />
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open('https://www.npmjs.com/package/slate-react', '_blank');
						}}>
						slate-react
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open('https://github.com/ianstormtaylor/slate#readme', '_blank');
						}}>
						slate-react
					</Button>
				</SubheaderRight>
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
						<div className='col-span-12'>
							<ExampleView title='Example 1' mdFile={RichTextExample1MD as string}>
								<Card>
									<CardBody>
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
									<MdViewer mdFile={RichTextInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='color'
							ref={sectionRefs[2]}
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrColors.map((item) => (
											<div key={item}>
												<RichText
													id='description'
													value={formik.values.description}
													handleChange={(event) => {
														formik
															.setFieldValue('description', event)
															.then(() => {})
															.catch(() => {});
													}}
													color={item}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='colorIntensity'
							ref={sectionRefs[3]}
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrColorIntensity.map((item) => (
											<div key={item}>
												<RichText
													id='description'
													value={formik.values.description}
													handleChange={(event) => {
														formik
															.setFieldValue('description', event)
															.then(() => {})
															.catch(() => {});
													}}
													colorIntensity={item}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='rounded'
							ref={sectionRefs[4]}
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrRounded.map((item) => (
											<div key={item}>
												<RichText
													id='description'
													value={formik.values.description}
													handleChange={(event) => {
														formik
															.setFieldValue('description', event)
															.then(() => {})
															.catch(() => {});
													}}
													rounded={item}
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
						<code className='text-xs'>{'<RichText />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#rounded'>rounded</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default RichTextClient;
