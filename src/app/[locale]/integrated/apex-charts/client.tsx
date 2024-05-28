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
import ApexChartsExample1Partial from '@/app/[locale]/integrated/apex-charts/_partial/ApexChartsExample1.partial';
import ApexChartsExample2Partial from '@/app/[locale]/integrated/apex-charts/_partial/ApexChartsExample2.partial';
import ApexChartsExample3Partial from '@/app/[locale]/integrated/apex-charts/_partial/ApexChartsExample3.partial';
import ApexChartsExample4Partial from '@/app/[locale]/integrated/apex-charts/_partial/ApexChartsExample4.partial';
import ApexChartsExample1MD from './_md/ApexChartsExample1.md';
import ApexChartsExample2MD from './_md/ApexChartsExample2.md';
import ApexChartsExample3MD from './_md/ApexChartsExample3.md';
import ApexChartsExample4MD from './_md/ApexChartsExample4.md';

const ApexChartsClient = () => {
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
						currentPage='ApexCharts'
					/>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open('https://www.npmjs.com/package/react-apexcharts', '_blank');
						}}>
						react-apexcharts
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/apexcharts/react-apexcharts#readme',
								'_blank',
							);
						}}>
						react-apexcharts
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
							<ExampleView title='Example 1' mdFile={ApexChartsExample1MD as string}>
								<Card>
									<CardBody>
										<ApexChartsExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={ApexChartsExample2MD as string}>
								<Card>
									<CardBody>
										<ApexChartsExample2Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 3' mdFile={ApexChartsExample3MD as string}>
								<Card>
									<CardBody>
										<ApexChartsExample3Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 4' mdFile={ApexChartsExample4MD as string}>
								<Card>
									<CardBody>
										<ApexChartsExample4Partial />
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

export default ApexChartsClient;
