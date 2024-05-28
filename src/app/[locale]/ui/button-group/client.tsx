'use client';

import React, { useRef, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft } from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import useScrollSpy from 'react-use-scrollspy';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Button, { TButtonSize, TButtonVariants } from '@/components/ui/Button';
import Container from '@/components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '@/templates/for-demo/Doc';
import ExampleView from '@/templates/for-demo/ExampleView';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import MdViewer from '@/components/MdViewer';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrRounded } from '@/types/rounded.type';
import ButtonGroupInterfaceMd from './_md/ButtonGroupInterface.md';
import ButtonGroupExample2MD from './_md/ButtonGroupExample2.md';
import ButtonGroupExample1MD from './_md/ButtonGroupExample1.md';

const ButtonGroupClient = () => {
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

	const [previewVariant, setPreviewVariant] = useState<TButtonVariants>('solid');
	const PreviewSettings = (
		<ButtonGroup>
			<Button
				isActive={previewVariant === 'solid'}
				onClick={() => setPreviewVariant('solid')}>
				Solid
			</Button>
			<Button
				isActive={previewVariant === 'outline'}
				onClick={() => setPreviewVariant('outline')}>
				Outline
			</Button>
			<Button
				isActive={previewVariant === 'default'}
				onClick={() => setPreviewVariant('default')}>
				Default
			</Button>
		</ButtonGroup>
	);

	const [activeButton, setActiveButton] = useState(3);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Button Group' />
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
							<ExampleView title='Example 1' mdFile={ButtonGroupExample1MD as string}>
								<Card>
									<CardBody>
										<ButtonGroup variant='solid'>
											{[1, 2, 3, 4].map((item) => (
												<Button
													key={item}
													isActive={item === activeButton}
													onClick={() => setActiveButton(item)}>
													Button {item}
												</Button>
											))}
										</ButtonGroup>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={ButtonGroupExample2MD as string}>
								<Card>
									<CardBody className='flex'>
										<ButtonGroup isVertical>
											{[1, 2, 3, 4].map((item) => (
												<Button
													key={item}
													color='amber'
													isActive={item === activeButton}
													onClick={() => setActiveButton(item)}>
													Button {item}
												</Button>
											))}
										</ButtonGroup>
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
									<MdViewer mdFile={ButtonGroupInterfaceMd as string} />
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrBorderWidth.map((item) => (
											<div key={item}>
												<ButtonGroup borderWidth={item} variant='outline'>
													<Button>{item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
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
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrColors.map((item) => (
											<div key={item}>
												<ButtonGroup color={item} variant={previewVariant}>
													<Button>{item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
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
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap gap-4'>
										{arrColorIntensity.map((item) => (
											<div key={item}>
												<ButtonGroup
													colorIntensity={item}
													variant={previewVariant}>
													<Button>colorIntensity - {item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='isVertical'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>isVertical?: boolean;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false].map((item: boolean) => (
											<div key={String(item)}>
												<ButtonGroup
													isVertical={item}
													variant={previewVariant}>
													<Button>{String(item)}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='rounded'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>rounded?: TRounded;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrRounded.map((item) => (
											<div key={item}>
												<ButtonGroup
													rounded={item}
													variant={previewVariant}>
													<Button>{item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='size'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>size?: TButtonSize;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['xs', 'sm', 'default', 'lg', 'xl'].map((item) => (
											<div key={item}>
												<ButtonGroup
													size={item as TButtonSize}
													variant={previewVariant}>
													<Button>{item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='variant'
							ref={sectionRefs[8]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>variant?: TButtonVariants;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['solid', 'outline', 'default'].map((item) => (
											<div key={item}>
												<ButtonGroup variant={item as TButtonVariants}>
													<Button>{item}</Button>
													<Button isActive>Active</Button>
													<Button isDisable>Disable</Button>
													<Button>Default</Button>
													<Button>Default</Button>
												</ButtonGroup>
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
						<code className='text-xs'>{'<ButtonGroup />'}</code>
						<Button isActive={activeSection === 2} className='!px-0'>
							<a href='#borderWidth'>borderWidth</a>
						</Button>

						<Button isActive={activeSection === 3}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>

						<Button isActive={activeSection === 5}>
							<a href='#isVertical'>isVertical</a>
						</Button>

						<Button isActive={activeSection === 6}>
							<a href='#rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 7}>
							<a href='#size'>size</a>
						</Button>
						<Button isActive={activeSection === 8}>
							<a href='#variant'>variant</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default ButtonGroupClient;
