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
import TablePart from '@/app/[locale]/ui/table/_partial/Table.part';
import Table3Part from '@/app/[locale]/ui/table/_partial/Table3.part';
import TablePartial from '@/app/[locale]/(home)/_partial/Table.partial';
import TableInterfaceMD from './_md/TableInterface.md';
import TableExample1MD from './_md/TableExample1.md';
import TableExample2MD from './_md/TableExample2.md';
import TableExample3MD from './_md/TableExample3.md';

const TableClient = () => {
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
					<Breadcrumb path='Components & Templates / UI' currentPage='Table' />
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open(
								'https://www.npmjs.com/package/@tanstack/react-table',
								'_blank',
							);
						}}>
						@tanstack/react-table
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open('https://github.com/tanstack/table#readme', '_blank');
						}}>
						TanStack/table
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
							<ExampleView title='Example 1' mdFile={TableExample1MD as string}>
								<TablePart />
							</ExampleView>
						</div>
						<div className='col-span-12'>
							<ExampleView title='Example 2' mdFile={TableExample2MD as string}>
								<Card>
									<TablePartial />
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12'>
							<ExampleView title='Example 3' mdFile={TableExample3MD as string}>
								<Table3Part />
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
									<MdViewer mdFile={TableInterfaceMD as string} />
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
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default TableClient;
