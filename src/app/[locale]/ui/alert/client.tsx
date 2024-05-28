'use client';

import React, { useRef, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import useScrollSpy from 'react-use-scrollspy';
import Alert, { TAlertVariants } from '@/components/ui/Alert';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Button from '@/components/ui/Button';
import Subheader, { SubheaderLeft } from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import Container from '@/components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '@/templates/for-demo/Doc';
import ExampleView from '@/templates/for-demo/ExampleView';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import MdViewer from '@/components/MdViewer';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrFontSizes } from '@/types/fontSizes.type';
import { arrRounded } from '@/types/rounded.type';
import AlertExample1MD from '@/app/[locale]/ui/alert/_md/AlertExample1.md';
import AlertExample2MD from '@/app/[locale]/ui/alert/_md/AlertExample2.md';
import AlertInterfaceMd from '@/app/[locale]/ui/alert/_md/AlertInterface.md';

const AlertClient = () => {
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
		useRef(null),
		useRef(null),
	];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	const [previewVariant, setPreviewVariant] = useState<TAlertVariants>('solid');

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

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Alert' />
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
							<ExampleView title='Example 1' mdFile={AlertExample1MD as string}>
								<Card>
									<CardBody>
										<Alert
											className='border-transparent'
											color='amber'
											icon='HeroBeaker'
											title='Example Alert!'
											variant='solid'>
											You can use props and tailwind's class names as needed
											for your design.
										</Alert>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 1' mdFile={AlertExample2MD as string}>
								<Card>
									<CardBody>
										<Alert
											className='border-transparent'
											title='Example Alert!'
											variant='outline'
											isClosable>
											You can use props and tailwind's class names as needed
											for your design.
										</Alert>
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
									<MdViewer mdFile={AlertInterfaceMd as string} />
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
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrBorderWidth.map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert borderWidth={item} variant={previewVariant}>
													borderWidth: <b>{item}</b>, Lorem ipsum dolor
													sit amet.
												</Alert>
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
									<div className='grid grid-cols-12 gap-4'>
										{arrColors.map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert color={item} variant={previewVariant}>
													Color: <b>{item}</b>, Lorem ipsum dolor sit
													amet.
												</Alert>
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
									<div className='grid grid-cols-12 gap-4'>
										{arrColorIntensity.map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert
													colorIntensity={item}
													variant={previewVariant}>
													borderWidth: <b>{item}</b>, Lorem ipsum dolor
													sit amet.
												</Alert>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='icon'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>icon?: TIcons</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{[
											'HeroRocketLaunch',
											'HeroInformationCircle',
											'HeroBolt',
										].map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert icon={item} variant={previewVariant}>
													icon: <b>{item}</b>, Lorem ipsum dolor sit amet.
												</Alert>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='iconSize'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>iconSize?: TFontSizes;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{arrFontSizes.map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert
													icon='HeroRocketLaunch'
													iconSize={item}
													variant={previewVariant}>
													iconSize: <b>{item}</b>, Lorem ipsum dolor sit
													amet.
												</Alert>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='isClosable'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>isClosable?: boolean;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{[true, false].map((item) => (
											<div
												key={String(item)}
												className='col-span-12 md:col-span-6'>
												<Alert
													isClosable={item}
													icon='HeroRocketLaunch'
													variant={previewVariant}>
													isClosable: <b>{String(item)}</b>, Lorem ipsum
													dolor sit amet. Lorem ipsum dolor sit amet.
													Lorem ipsum dolor sit amet. Lorem ipsum dolor
													sit amet. Lorem ipsum dolor sit amet. Lorem
													ipsum dolor sit amet. Lorem ipsum dolor sit
													amet. Lorem ipsum dolor sit amet.
												</Alert>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='rounded'
							ref={sectionRefs[8]}
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
									<div className='grid grid-cols-12 gap-4'>
										{arrRounded.map((item) => (
											<div
												key={String(item)}
												className='col-span-12 md:col-span-6'>
												<Alert
													icon='HeroRocketLaunch'
													rounded={item}
													variant={previewVariant}>
													isClosable: <b>{String(item)}</b>, Lorem ipsum
													dolor sit amet. Lorem ipsum dolor sit amet.
													Lorem ipsum dolor sit amet. Lorem ipsum dolor
													sit amet. Lorem ipsum dolor sit amet. Lorem
													ipsum dolor sit amet. Lorem ipsum dolor sit
													amet. Lorem ipsum dolor sit amet.
												</Alert>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='title'
							ref={sectionRefs[9]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>title?: string;</code>
										</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>{PreviewSettings}</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 md:col-span-6'>
											<Alert
												icon='HeroRocketLaunch'
												title='Title is here!'
												variant={previewVariant}>
												Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
												amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
												sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
												dolor sit amet. Lorem ipsum dolor sit amet. Lorem
												ipsum dolor sit amet.
											</Alert>
										</div>
										<div className='col-span-12 md:col-span-6'>
											<Alert
												title='Title is here! (Without Icon)'
												variant={previewVariant}>
												Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
												amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
												sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
												dolor sit amet. Lorem ipsum dolor sit amet. Lorem
												ipsum dolor sit amet.
											</Alert>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='variant'
							ref={sectionRefs[10]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>variant?: TAlertVariants;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['solid', 'outline', 'default'].map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 xl:col-span-4'>
												<Alert variant={item as TAlertVariants}>
													Variant: <b>{item}</b>, Lorem ipsum dolor sit
													amet.
												</Alert>
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
						<code className='text-xs'>{'<Alert />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#borderWidth'>borderWidth</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#icon'>icon</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#iconSize'>iconSize</a>
						</Button>
						<Button isActive={activeSection === 7}>
							<a href='#isClosable'>isClosable</a>
						</Button>
						<Button isActive={activeSection === 8}>
							<a href='#rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 9}>
							<a href='#title'>title</a>
						</Button>
						<Button isActive={activeSection === 10}>
							<a href='#variant'>variant</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default AlertClient;
