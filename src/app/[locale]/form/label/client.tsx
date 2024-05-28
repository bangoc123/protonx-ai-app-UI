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
import Input from '@/components/form/Input';
import Icon from '@/components/icon/Icon';
import LabelExample2MD from './_md/LabelExample2.md';
import LabelExample1MD from './_md/LabelExample1.md';
import LabelInterfaceMD from './_md/LabelInterface.md';

const LabelClient = () => {
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
			emailAddress: '',
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Label' />
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
							<ExampleView title='Example 1' mdFile={LabelExample1MD as string}>
								<Card>
									<CardBody>
										<Label
											htmlFor='urlAddress'
											description='Just write the url address. Example; example.com'>
											Website Address
										</Label>
										<FieldWrap firstSuffix='https://'>
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
							<ExampleView title='Example 2' mdFile={LabelExample2MD as string}>
								<Card>
									<CardBody>
										<Label htmlFor='emailAddress'>Email Address</Label>
										<FieldWrap
											firstSuffix={
												<Icon icon='HeroEnvelope' className='mx-2' />
											}>
											<Input
												type='email'
												id='emailAddress'
												name='emailAddress'
												onChange={formik.handleChange}
												value={formik.values.emailAddress}
												placeholder='johndoe@example.com'
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
									<MdViewer mdFile={LabelInterfaceMD as string} />
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
						<code className='text-xs'>{'<Label />'}</code>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default LabelClient;
