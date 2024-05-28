'use client';

import React, { useMemo, useRef, useState } from 'react';
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
import Progress from '@/components/ui/Progress';
import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import ProgressExample2MD from './_md/ProgressExample2.md';
import ProgressExample1MD from './_md/ProgressExample1.md';
import ProgressInterfaceMD from './_md/ProgressInterface.md';

const ProgressClient = () => {
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

	const [minValue, setMinValue] = useState<number>(0);
	const [value, setValue] = useState<number>(50);
	const [maxValue, setMaxValue] = useState<number>(100);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Proggress' />
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
							<ExampleView title='Example 1' mdFile={ProgressExample1MD as string}>
								<Card>
									<CardBody>
										<div className='flex gap-4'>
											<Progress value={75} />
											<div className='font-bold'>75</div>
										</div>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={ProgressExample2MD as string}>
								<Card>
									<CardBody>
										<div className='flex gap-4'>
											<Progress value={16} max={40} color='red' isAnimation />
											<div className='font-bold'>{(16 / 40) * 100}%</div>
										</div>
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
									<MdViewer mdFile={ProgressInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='Progress-min-max-value'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>min?: number; max?: number; value?: number;</code>
											<div className='text-xs'>{'<Progress />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 md:col-span-3'>
											<Label htmlFor='minValue'>Min Value:</Label>
											<Input
												type='number'
												name='minValue'
												value={minValue}
												max={maxValue - 1}
												onChange={(event) =>
													setMinValue(Number(event.target.value))
												}
											/>
										</div>
										<div className='col-span-12 md:col-span-3'>
											<Label htmlFor='minValue'>Value:</Label>
											<Input
												type='number'
												name='value'
												value={value}
												min={minValue}
												max={maxValue}
												onChange={(event) =>
													setValue(Number(event.target.value))
												}
											/>
										</div>
										<div className='col-span-12 md:col-span-3'>
											<Label htmlFor='minValue'>Max Value:</Label>
											<Input
												type='number'
												name='maxValue'
												value={maxValue}
												min={minValue + 1}
												onChange={(event) =>
													setMaxValue(Number(event.target.value))
												}
											/>
										</div>
										<div className='col-span-12 md:col-span-3'>
											<Button
												variant='outline'
												className='h-full w-full'
												isDisable={
													minValue === 0 &&
													value === 50 &&
													maxValue === 100
												}
												onClick={() => {
													setMinValue(0);
													setValue(50);
													setMaxValue(100);
												}}>
												Default
											</Button>
										</div>
										<div className='col-span-12'>
											<Progress min={minValue} max={maxValue} value={value} />
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Progress-color'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>color?: TColors;</code>
											<div className='text-xs'>{'<Progress />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrColors.map((item) => (
											<div key={item} className='col-span-12 md:col-span-3'>
												<div className='mb-2'>color - {item}</div>
												<Progress
													// eslint-disable-next-line react-hooks/rules-of-hooks
													value={useMemo(
														() => Math.floor(Math.random() * 100),
														[],
													)}
													color={item}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Progress-colorIntensity'
							ref={sectionRefs[4]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>colorIntensity?: TColorIntensity;</code>
											<div className='text-xs'>{'<Progress />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrColorIntensity.map((item) => (
											<div key={item} className='col-span-12 md:col-span-3'>
												<div className='mb-2'>colorIntensity - {item}</div>
												<Progress
													// eslint-disable-next-line react-hooks/rules-of-hooks
													value={useMemo(
														() => Math.floor(Math.random() * 100),
														[],
													)}
													colorIntensity={item}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Progress-rounded'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>rounded?: TRounded;</code>
											<div className='text-xs'>{'<Progress />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrRounded.map((item) => (
											<div key={item} className='col-span-12 md:col-span-3'>
												<div className='mb-2'>rounded - {item}</div>
												<Progress
													// eslint-disable-next-line react-hooks/rules-of-hooks
													value={useMemo(
														() => Math.floor(Math.random() * 100),
														[],
													)}
													rounded={item}
												/>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Progress-isAnimation'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isAnimation?: boolean;</code>
											<div className='text-xs'>{'<Progress />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{[true, false].map((item) => (
											<div
												key={String(item)}
												className='col-span-12 md:col-span-6'>
												<div className='mb-2'>
													isAnimation - {String(item)}
												</div>
												<Progress
													// eslint-disable-next-line react-hooks/rules-of-hooks
													value={useMemo(
														() => Math.floor(Math.random() * 100),
														[],
													)}
													isAnimation={item}
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
						<code className='text-xs'>{'<Progress />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#Progress-min-max-value'>min, max, value</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#Progress-color'>color</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#Progress-colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#Progress-rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#Progress-isAnimation'>isAnimation</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default ProgressClient;
