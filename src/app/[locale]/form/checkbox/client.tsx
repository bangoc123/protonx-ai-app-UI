'use client';

import React, { useEffect, useRef } from 'react';
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
import Checkbox, {
	CheckboxGroup,
	TCheckboxDimension,
	TCheckboxVariants,
} from '@/components/form/Checkbox';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import { arrColors } from '@/types/colors.type';
import CheckboxExample1MD from './_md/CheckboxExample1.md';
import CheckboxExample2MD from './_md/CheckboxExample2.md';
import CheckboxExample3MD from './_md/CheckboxExample3.md';
import CheckboxInterfaceMD from './_md/CheckboxInterface.md';

const CheckboxClient = () => {
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

	const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	const formik = useFormik({
		initialValues: {
			optionA: true,
			optionB: false,
			optionC: true,
			optionD: false,
			options: [options[1], options[3]],
		},
		onSubmit: () => {},
	});

	const selectedOptions: string[] = options.filter((o) => formik.values.options.includes(o));

	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (options.length > selectedOptions.length && selectedOptions.length > 0) {
				ref.current.checked = false;
				ref.current.indeterminate = true;
			} else {
				ref.current.checked = false;
				ref.current.indeterminate = false;
			}
		}
	}, [selectedOptions.length, options.length]);

	const handleSelectAll = () => {
		if (options.length > selectedOptions.length) {
			formik
				.setFieldValue(
					'options',
					options.map((item) => item),
				)
				.then(() => {})
				.catch(() => {});
		} else {
			formik
				.setFieldValue('options', [])
				.then(() => {})
				.catch(() => {});
		}
	};
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Checkbox' />
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
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 1' mdFile={CheckboxExample1MD as string}>
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
											<Checkbox
												disabled
												label='Option C (disabled)'
												id='optionC'
												onChange={formik.handleChange}
												checked={formik.values.optionC}
											/>
											<Checkbox
												disabled
												label='Option D (disabled)'
												id='optionD'
												onChange={formik.handleChange}
												checked={formik.values.optionD}
											/>
										</CheckboxGroup>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 2' mdFile={CheckboxExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='optionA'>Example Checkbox</Label>
										<CheckboxGroup isInline>
											<Checkbox
												label='Option A'
												id='optionA'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionA}
											/>
											<Checkbox
												label='Option B'
												id='optionB'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionB}
											/>
											<Checkbox
												disabled
												label='Option C (disabled)'
												id='optionC'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionC}
											/>
											<Checkbox
												disabled
												label='Option D (disabled)'
												id='optionD'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionD}
											/>
										</CheckboxGroup>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 3' mdFile={CheckboxExample3MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='options'>Example Checkbox</Label>
										<Checkbox
											ref={ref}
											label='Option ALL'
											id='options'
											onChange={handleSelectAll}
											checked={options.length === selectedOptions.length}
										/>
										{options.map((item) => (
											<Checkbox
												key={item}
												label={item}
												id={item}
												name='options'
												onChange={formik.handleChange}
												checked={formik.values.options?.includes(item)}
												className='ms-4'
											/>
										))}
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
									<MdViewer mdFile={CheckboxInterfaceMD as string} />
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
												<Checkbox
													label={`Color: ${item}`}
													id='optionA'
													onChange={formik.handleChange}
													checked={formik.values.optionA}
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
												<Checkbox
													label={`Color Intensity: ${item}`}
													id='optionA'
													onChange={formik.handleChange}
													checked={formik.values.optionA}
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
												<Checkbox
													label={`Rounded: ${item}`}
													id='optionA'
													onChange={formik.handleChange}
													checked={formik.values.optionA}
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
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>dimension?: TCheckboxDimension;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['sm', 'default', 'lg', 'xl'].map((item) => (
											<div key={item}>
												<Checkbox
													label={`Dimension: ${item}`}
													id='optionA'
													onChange={formik.handleChange}
													checked={formik.values.optionA}
													dimension={item as TCheckboxDimension}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='variant'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>variant?: TCheckboxVariants;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['default', 'switch'].map((item) => (
											<div key={item}>
												<Checkbox
													label={`Variant: ${item}`}
													id='optionA'
													onChange={formik.handleChange}
													checked={formik.values.optionA}
													variant={item as TCheckboxVariants}
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
						<code className='text-xs'>{'<Checkbox />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#dimension'>dimension</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#variant'>variant</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default CheckboxClient;
