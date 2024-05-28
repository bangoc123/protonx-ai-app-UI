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
import SelectReact, {
	TSelectDimension,
	TSelectGroups,
	TSelectOptions,
} from '@/components/form/SelectReact';
import { useFormik } from 'formik';
import Label from '@/components/form/Label';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import SelectReactExample2MD from './_md/SelectReactExample2.md';
import SelectReactExample1MD from './_md/SelectReactExample1.md';
import ReactSelectInterfaceMD from './_md/ReactSelectInterface.md';

const SelectReactClient = () => {
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

	const options: TSelectOptions = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];
	const optionsGroup: TSelectGroups = [
		{
			label: 'Colours',
			options: [
				{ value: 'chocolate', label: 'Chocolate' },
				{ value: 'strawberry', label: 'Strawberry' },
				{ value: 'vanilla', label: 'Vanilla' },
			],
		},
		{
			label: 'Cars',
			options: [
				{ value: 'volvo', label: 'Volvo', isFixed: true },
				{ value: 'audi', label: 'Audi' },
				{ value: 'bmw', label: 'BMW' },
				{ value: 'mercedes', label: 'Mercedes' },
				{ value: 'VW', label: 'VW', isDisabled: true },
			],
		},
	];

	const formik = useFormik({
		initialValues: {
			options: undefined,
			optionsMulti: [optionsGroup[1].options[0]],
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Select React' />
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open('https://www.npmjs.com/package/react-select', '_blank');
						}}>
						react-select
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/JedWatson/react-select/tree/master#readme',
								'_blank',
							);
						}}>
						react-select
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
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 1' mdFile={SelectReactExample1MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='options'>Example select</Label>
										<SelectReact
											options={options}
											id='options'
											name='options'
											value={formik.values.options}
											onChange={(value) =>
												formik.setFieldValue('options', value)
											}
										/>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={SelectReactExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='optionsMulti'>Example select</Label>
										<SelectReact
											name='optionsMulti'
											options={optionsGroup}
											isMulti
											value={formik.values.optionsMulti}
											menuPlacement='auto'
											onChange={(value) =>
												formik.setFieldValue('optionsMulti', value)
											}
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
									<MdViewer mdFile={ReactSelectInterfaceMD as string} />
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
										{arrBorderWidth.map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<SelectReact
													options={options}
													id='options'
													name='options'
													value={formik.values.options}
													onChange={(value) =>
														formik.setFieldValue('options', value)
													}
													borderWidth={item}
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
										{arrColors.map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<SelectReact
													options={options}
													id='options'
													name='options'
													value={formik.values.options}
													onChange={(value) =>
														formik.setFieldValue('options', value)
													}
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
										{arrColorIntensity.map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<SelectReact
													options={options}
													id='options'
													name='options'
													value={formik.values.options}
													onChange={(value) =>
														formik.setFieldValue('options', value)
													}
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
										{arrRounded.map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<SelectReact
													options={options}
													id='options'
													name='options'
													value={formik.values.options}
													onChange={(value) =>
														formik.setFieldValue('options', value)
													}
													rounded={item}
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
											<code>dimension?: TSelectDimension;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['sm', 'default', 'lg', 'xl'].map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<SelectReact
													options={options}
													id='options'
													name='options'
													value={formik.values.options}
													onChange={(value) =>
														formik.setFieldValue('options', value)
													}
													dimension={item as TSelectDimension}
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
						<code className='text-xs'>{'<SelectReact />'}</code>
						<Button isActive={activeSection === 2} className='!px-0'>
							<a href='#borderWidth'>borderWidth</a>
						</Button>
						<Button isActive={activeSection === 3} className='!px-0'>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 4} className='!px-0'>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 5} className='!px-0'>
							<a href='#rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 6} className='!px-0'>
							<a href='#dimension'>dimension</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default SelectReactClient;
