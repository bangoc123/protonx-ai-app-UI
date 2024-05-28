'use client';

import React, { useRef } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import useScrollSpy from 'react-use-scrollspy';
import Subheader, { SubheaderLeft } from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import Container from '@/components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '@/templates/for-demo/Doc';
import ExampleView from '@/templates/for-demo/ExampleView';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import MdViewer from '@/components/MdViewer';
import AlertExample1MD from '@/app/[locale]/ui/alert/_md/AlertExample1.md';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import { arrFontSizes } from '@/types/fontSizes.type';
import Button from '@/components/ui/Button';
import IconInterfaceMD from './_md/IconInterface.md';

const IconClient = () => {
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

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Icons' currentPage='Icon' />
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
						<div className='col-span-12'>
							<ExampleView title='Example 1' mdFile={AlertExample1MD as string}>
								<Card>
									<CardBody>
										<div className='flex flex-wrap gap-4'>
											<Icon icon='HeroBeaker' />
											<Icon icon='HeroBriefcase' />
											<Icon icon='HeroGlobeAsiaAustralia' />
											<Icon icon='HeroMoon' />
											<Icon icon='DuoAppleWatch' />
											<Icon icon='DuoEqualizer' />
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
									<MdViewer mdFile={IconInterfaceMD as string} />
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrColors.map((item) => (
											<div
												key={item}
												className='flex flex-col items-center gap-2'>
												<Icon
													icon='HeroBellAlert'
													color={item}
													size='text-4xl'
												/>
												<span className='text-xs text-zinc-500'>
													{item}
												</span>
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
									<div className='flex flex-wrap items-center gap-4'>
										{arrColorIntensity.map((item) => (
											<div
												key={item}
												className='flex flex-col items-center gap-2'>
												<Icon
													icon='HeroBellAlert'
													colorIntensity={item}
													color='blue'
													size='text-4xl'
												/>
												<span className='text-xs text-zinc-500'>
													{item}
												</span>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='size'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>size?: TFontSizes;</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrFontSizes.map((item) => (
											<div
												key={item}
												className='flex flex-col items-center gap-2'>
												<Icon
													icon='HeroBellAlert'
													color='blue'
													size={item}
												/>
												<span className='text-xs text-zinc-500'>
													{item}
												</span>
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
						<Button isActive={activeSection === 3}>
							<a href='#color'>color</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#size'>size</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default IconClient;
