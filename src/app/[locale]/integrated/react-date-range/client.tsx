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
import Card, { CardBody } from '@/components/ui/Card';
import ReactDateRangeExample1Partial from '@/app/[locale]/integrated/react-date-range/_partial/ReactDateRangeExample1.partial';
import ReactDateRangeExample2Partial from '@/app/[locale]/integrated/react-date-range/_partial/ReactDateRangeExample2.partial';
import ReactDateRangeExample1MD from './_md/ReactDateRangeExample1.md';
import ReactDateRangeExample2MD from './_md/ReactDateRangeExample2.md';

const ReactDateRangeClient = () => {
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

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb
						path='Components & Templates / Integrated'
						currentPage='React Date Range'
					/>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open('https://www.npmjs.com/package/react-date-range', '_blank');
						}}>
						react-date-range
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/hypeserver/react-date-range#readme',
								'_blank',
							);
						}}>
						react-date-range
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
							<ExampleView
								title='Example 1 - DateRange'
								mdFile={ReactDateRangeExample1MD as string}>
								<Card>
									<CardBody>
										<ReactDateRangeExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12'>
							<ExampleView
								title='Example 2 - DateRangePicker'
								mdFile={ReactDateRangeExample2MD as string}>
								<Card>
									<CardBody>
										<ReactDateRangeExample2Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default ReactDateRangeClient;
