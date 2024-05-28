'use client';

import React, { useRef } from 'react';
import * as PopperJS from '@popperjs/core';
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
import Tooltip from '@/components/ui/Tooltip';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrRounded } from '@/types/rounded.type';
import TooltipInterfaceMD from './_md/TooltipInterface.md';
import TooltipExample1MD from './_md/TooltipExample1.md';
import TooltipExample2MD from './_md/TooltipExample2.md';

const TooltipClient = () => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Tooltip' />
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
							<ExampleView title='Example 1' mdFile={TooltipExample1MD as string}>
								<Card>
									<CardBody>
										<div className='space-x-1 text-zinc-500 rtl:space-x-reverse'>
											<span className='font-semibold'>Lorem ipsum.</span>
											<Tooltip text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
										</div>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={TooltipExample2MD as string}>
								<Card>
									<CardBody>
										Lorem{' '}
										<Tooltip text='Pellentesque velit turpis, vestibulum ut tortor at, suscipit dapibus mi.'>
											<span className='underline decoration-pink-500 decoration-wavy underline-offset-2'>
												ipsum
											</span>
										</Tooltip>{' '}
										dolor sit{' '}
										<Tooltip text='Nunc tempus eros libero.'>
											<span className='underline decoration-indigo-500 decoration-wavy underline-offset-2'>
												amet
											</span>
										</Tooltip>
										, consectetur adipiscing elit.
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
									<MdViewer mdFile={TooltipInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='Tooltip-placement'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>placement?: PopperJS.Placement;</code>
											<div className='text-xs'>{'<Tooltip />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-col flex-wrap gap-4'>
										<div className='flex flex-wrap items-center gap-4'>
											{['auto', 'auto-start', 'auto-end'].map((item) => (
												<div key={item}>
													<Tooltip
														text={item}
														placement={item as PopperJS.Placement}>
														{item}
													</Tooltip>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['top-start', 'top', 'top-end'].map((item) => (
												<div key={item}>
													<Tooltip
														text={item}
														placement={item as PopperJS.Placement}>
														{item}
													</Tooltip>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['bottom-start', 'bottom', 'bottom-end'].map(
												(item) => (
													<div key={item}>
														<Tooltip
															text={item}
															placement={item as PopperJS.Placement}>
															{item}
														</Tooltip>
													</div>
												),
											)}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['right-start', 'right', 'right-end'].map((item) => (
												<div key={item}>
													<Tooltip
														text={item}
														placement={item as PopperJS.Placement}>
														{item}
													</Tooltip>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['left-start', 'left', 'left-end'].map((item) => (
												<div key={item}>
													<Tooltip
														text={item}
														placement={item as PopperJS.Placement}>
														{item}
													</Tooltip>
												</div>
											))}
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Tooltip-borderWidth'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>borderWidth?: TBorderWidth;</code>
											<div className='text-xs'>{'<Tooltip />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrBorderWidth.map((item) => (
											<div key={item}>
												<Tooltip text={item} borderWidth={item}>
													{item}
												</Tooltip>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Tooltip-rounded'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>rounded?: TRounded;</code>
											<div className='text-xs'>{'<Tooltip />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrRounded.map((item) => (
											<div key={item}>
												<Tooltip text={item} rounded={item}>
													{item}
												</Tooltip>
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
						<code className='text-xs'>{'<Tooltip />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#Tooltip-placement'>placement</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#Tooltip-borderWidth'>borderWidth</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#Tooltip-rounded'>rounded</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default TooltipClient;
