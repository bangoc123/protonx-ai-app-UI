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
import Icon from '@/components/icon/Icon';
import Select, { TSelectDimension } from '@/components/form/Select';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import SelectExample2MD from './_md/SelectExample2.md';
import SelectExample1MD from './_md/SelectExample1.md';
import SelectInterfaceMD from './_md/SelectInterface.md';

const SelectClient = () => {
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

	const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

	const formik = useFormik({
		initialValues: {
			options: [options[1]],
			options2: '',
			optionsColor: '',
		},
		onSubmit: () => {},
	});
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Select' />
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
							<ExampleView title='Example 1' mdFile={SelectExample1MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='options'>Example select</Label>
										<FieldWrap
											lastSuffix={
												<Icon icon='HeroChevronDown' className='mx-2' />
											}>
											<Select
												id='options'
												name='options'
												onChange={formik.handleChange}
												value={formik.values.options}
												placeholder='Select option'>
												{options.map((i) => (
													<option key={i} value={i}>
														{i}
													</option>
												))}
											</Select>
										</FieldWrap>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={SelectExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='options2'>
											Example select option group
										</Label>
										<FieldWrap
											firstSuffix={<Icon icon='HeroTruck' className='mx-2' />}
											lastSuffix={
												<Icon icon='HeroChevronDown' className='mx-2' />
											}>
											<Select
												id='options2'
												name='options2'
												onChange={formik.handleChange}
												value={formik.values.options2}
												placeholder='Select option'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
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
									<MdViewer mdFile={SelectInterfaceMD as string} />
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
												<FieldWrap
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														id='optionsColor'
														name='optionsColor'
														onChange={formik.handleChange}
														value={formik.values.optionsColor}
														placeholder={`color ${item}`}
														borderWidth={item}>
														{options.map((i) => (
															<option key={i} value={i}>
																{i}
															</option>
														))}
													</Select>
												</FieldWrap>
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
												<FieldWrap
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														id='optionsColor'
														name='optionsColor'
														onChange={formik.handleChange}
														value={formik.values.optionsColor}
														placeholder={`color ${item}`}
														color={item}>
														{options.map((i) => (
															<option key={i} value={i}>
																{i}
															</option>
														))}
													</Select>
												</FieldWrap>
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
												<FieldWrap
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														id='optionsColor'
														name='optionsColor'
														onChange={formik.handleChange}
														value={formik.values.optionsColor}
														placeholder={`colorIntensity ${item}`}
														colorIntensity={item}>
														{options.map((i) => (
															<option key={i} value={i}>
																{i}
															</option>
														))}
													</Select>
												</FieldWrap>
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
												<FieldWrap
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														id='optionsColor'
														name='optionsColor'
														onChange={formik.handleChange}
														value={formik.values.optionsColor}
														placeholder={`rounded ${item}`}
														rounded={item}>
														{options.map((i) => (
															<option key={i} value={i}>
																{i}
															</option>
														))}
													</Select>
												</FieldWrap>
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
										{['xs', 'sm', 'default', 'lg', 'xl'].map((item) => (
											<div key={item} className='col-span-12 lg:col-span-4'>
												<FieldWrap
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														id='optionsColor'
														name='optionsColor'
														onChange={formik.handleChange}
														value={formik.values.optionsColor}
														placeholder={`dimension ${item}`}
														dimension={item as TSelectDimension}>
														{options.map((i) => (
															<option key={i} value={i}>
																{i}
															</option>
														))}
													</Select>
												</FieldWrap>
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
						<code className='text-xs'>{'<Select />'}</code>
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

export default SelectClient;
