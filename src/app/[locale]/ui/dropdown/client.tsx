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
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownNavLinkItem,
	DropdownToggle,
} from '@/components/ui/Dropdown';
import { componentsPages } from '@/config/pages.config';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrRounded } from '@/types/rounded.type';
import { arrColors } from '@/types/colors.type';
import { arrColorIntensity } from '@/types/colorIntensities.type';
import DropdownExample1MD from './_md/DropdownExample1.md';
import DropdownExample2MD from './_md/DropdownExample2.md';
import DropdownExample3MD from './_md/DropdownExample3.md';
import DropdownInterfaceMD from './_md/DropdownInterface.md';

const DropdownClient = () => {
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
					<Breadcrumb path='Components & Templates / UI' currentPage='Dropdown' />
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
							<ExampleView title='Example 1' mdFile={DropdownExample1MD as string}>
								<Card>
									<CardBody>
										<Dropdown>
											<DropdownToggle>
												<Button
													variant='outline'
													color='zinc'
													icon='HeroRocketLaunch'>
													Click
												</Button>
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem icon='HeroServer'>
													Item 1
												</DropdownItem>
												<DropdownItem icon='HeroEyeDropper'>
													Item 2
												</DropdownItem>
												<Dropdown>
													<DropdownToggle>
														<DropdownItem icon='HeroMap'>
															Item 3
														</DropdownItem>
													</DropdownToggle>
													<DropdownMenu placement='right-start'>
														<DropdownItem>Item 3.1</DropdownItem>
														<DropdownItem>Item 3.2</DropdownItem>
														<Dropdown>
															<DropdownToggle>
																<DropdownItem>
																	Item 3.3
																</DropdownItem>
															</DropdownToggle>
															<DropdownMenu placement='right-start'>
																<DropdownItem>
																	Item 3.3.1
																</DropdownItem>
																<DropdownItem>
																	Item 3.3.2
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</DropdownMenu>
												</Dropdown>
											</DropdownMenu>
										</Dropdown>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 2' mdFile={DropdownExample2MD as string}>
								<Card>
									<CardBody>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button
													variant='outline'
													color='zinc'
													icon='HeroEllipsisVertical'
												/>
											</DropdownToggle>
											<DropdownMenu placement='bottom-end'>
												<DropdownItem icon='HeroEye'>View</DropdownItem>
												<DropdownItem icon='HeroPencil'>Edit</DropdownItem>
												<DropdownItem
													icon='HeroTrash'
													className='border-t-2 text-red-500'>
													Delete
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 3' mdFile={DropdownExample3MD as string}>
								<Card>
									<CardBody>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button variant='solid'>Dropdown Mega</Button>
											</DropdownToggle>
											<DropdownMenu placement='bottom-end'>
												<div className='grid grid-cols-12 gap-4 divide-zinc-200 dark:divide-zinc-800 md:divide-x'>
													<div className='col-span-12 gap-4 md:col-span-3'>
														<DropdownNavLinkItem to='/' icon='HeroLink'>
															Home Page
														</DropdownNavLinkItem>
														<DropdownNavLinkItem
															to={
																componentsPages.uiPages.subPages
																	.dropdownPage.to
															}
															icon='HeroLink'>
															{
																componentsPages.uiPages.subPages
																	.dropdownPage.text
															}
														</DropdownNavLinkItem>
														<DropdownItem icon='HeroSquare2Stack'>
															Item 3
														</DropdownItem>
													</div>
													<div className='col-span-12 gap-4 md:col-span-3'>
														<DropdownItem icon='HeroSquare2Stack'>
															Item 4
														</DropdownItem>
														<DropdownItem icon='HeroSquare2Stack'>
															Item 5
														</DropdownItem>
														<DropdownItem icon='HeroSquare2Stack'>
															Item 6
														</DropdownItem>
													</div>
													<div className='col-span-12 gap-4 px-4 md:col-span-6'>
														Lorem ipsum dolor sit amet.
													</div>
												</div>
											</DropdownMenu>
										</Dropdown>
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
									<MdViewer mdFile={DropdownInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownToggle-hasIcon'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>hasIcon?: boolean;</code>
											<div className='text-xs'>{'<DropdownToggle />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false].map((item) => (
											<div key={String(item)}>
												<Dropdown>
													<DropdownToggle hasIcon={item}>
														<Button variant='outline'>
															hasIcon - {String(item)}
														</Button>
													</DropdownToggle>
													<DropdownMenu>
														<DropdownItem>Item 1</DropdownItem>
														<DropdownItem>Item 2</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownMenu-borderWidth'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>borderWidth?: TBorderWidth;</code>
											<div className='text-xs'>{'<DropdownMenu />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrBorderWidth.map((item) => (
											<div key={item}>
												<Dropdown>
													<DropdownToggle>
														<Button variant='outline'>
															borderWidth - {item}
														</Button>
													</DropdownToggle>
													<DropdownMenu borderWidth={item}>
														<DropdownItem>Item 1</DropdownItem>
														<DropdownItem>Item 2</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownMenu-isCloseAfterLeave'
							ref={sectionRefs[4]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isCloseAfterLeave?: boolean;</code>
											<div className='text-xs'>{'<DropdownMenu />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false].map((item) => (
											<div key={String(item)}>
												<Dropdown>
													<DropdownToggle>
														<Button variant='outline'>
															isCloseAfterLeave - {String(item)}
														</Button>
													</DropdownToggle>
													<DropdownMenu isCloseAfterLeave={item}>
														<DropdownItem>Item 1</DropdownItem>
														<DropdownItem>Item 2</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownMenu-placement'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>placement?: PopperJS.Placement;</code>
											<div className='text-xs'>{'<DropdownMenu />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap gap-4'>
										<div className='flex flex-wrap items-center gap-4'>
											{['auto', 'auto-start', 'auto-end'].map((item) => (
												<div key={item}>
													<Dropdown>
														<DropdownToggle>
															<Button variant='outline'>
																placement - {item}
															</Button>
														</DropdownToggle>
														<DropdownMenu
															placement={item as PopperJS.Placement}>
															<DropdownItem>Item 1</DropdownItem>
															<DropdownItem>Item 2</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['top-start', 'top', 'top-end'].map((item) => (
												<div key={item}>
													<Dropdown>
														<DropdownToggle>
															<Button variant='outline'>
																placement - {item}
															</Button>
														</DropdownToggle>
														<DropdownMenu
															placement={item as PopperJS.Placement}>
															<DropdownItem>Item 1</DropdownItem>
															<DropdownItem>Item 2</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['bottom-start', 'bottom', 'bottom-end'].map(
												(item) => (
													<div key={item}>
														<Dropdown>
															<DropdownToggle>
																<Button variant='outline'>
																	placement - {item}
																</Button>
															</DropdownToggle>
															<DropdownMenu
																placement={
																	item as PopperJS.Placement
																}>
																<DropdownItem>Item 1</DropdownItem>
																<DropdownItem>Item 2</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												),
											)}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['right-start', 'right', 'right-end'].map((item) => (
												<div key={item}>
													<Dropdown>
														<DropdownToggle>
															<Button variant='outline'>
																placement - {item}
															</Button>
														</DropdownToggle>
														<DropdownMenu
															placement={item as PopperJS.Placement}>
															<DropdownItem>Item 1</DropdownItem>
															<DropdownItem>Item 2</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											))}
										</div>
										<div className='flex flex-wrap items-center gap-4'>
											{['left-start', 'left', 'left-end'].map((item) => (
												<div key={item}>
													<Dropdown>
														<DropdownToggle>
															<Button variant='outline'>
																placement - {item}
															</Button>
														</DropdownToggle>
														<DropdownMenu
															placement={item as PopperJS.Placement}>
															<DropdownItem>Item 1</DropdownItem>
															<DropdownItem>Item 2</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											))}
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownMenu-rounded'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>rounded?: TRounded;</code>
											<div className='text-xs'>{'<DropdownMenu />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrRounded.map((item) => (
											<div key={item}>
												<Dropdown>
													<DropdownToggle>
														<Button variant='outline'>
															rounded - {item}
														</Button>
													</DropdownToggle>
													<DropdownMenu rounded={item}>
														<DropdownItem>Item 1</DropdownItem>
														<DropdownItem>Item 2</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownItem-color'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>color?: TColors;</code>
											<div className='text-xs'>{'<DropdownItem />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrColors.map((item) => (
											<div key={item}>
												<Dropdown>
													<DropdownToggle>
														<Button variant='outline'>
															color - {item}
														</Button>
													</DropdownToggle>
													<DropdownMenu>
														<DropdownItem isActive color={item}>
															Active Item
														</DropdownItem>
														<DropdownItem>Item 1</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownItem-colorIntensity'
							ref={sectionRefs[8]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>colorIntensity?: TColorIntensity;</code>
											<div className='text-xs'>{'<DropdownItem />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrColorIntensity.map((item) => (
											<div key={item}>
												<Dropdown>
													<DropdownToggle>
														<Button variant='outline'>
															colorIntensity - {item}
														</Button>
													</DropdownToggle>
													<DropdownMenu>
														<DropdownItem
															isActive
															colorIntensity={item}>
															Active Item
														</DropdownItem>
														<DropdownItem>Item 1</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownItem-isActive'
							ref={sectionRefs[9]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isActive?: boolean;</code>
											<div className='text-xs'>{'<DropdownItem />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										<Dropdown>
											<DropdownToggle>
												<Button variant='outline'>Click</Button>
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem isActive>Active Item</DropdownItem>
												<DropdownItem>Default Item</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownItem-icon'
							ref={sectionRefs[9]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>icon?: TIcons;</code>
											<div className='text-xs'>{'<DropdownItem />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										<div>
											<Dropdown>
												<DropdownToggle>
													<Button variant='outline'>Click</Button>
												</DropdownToggle>
												<DropdownMenu>
													{[
														'HeroRocketLaunch',
														'HeroShoppingCart',
														'HeroExclamationTriangle',
													].map((item) => (
														<DropdownItem key={item} icon={item}>
															icon - {item}
														</DropdownItem>
													))}
												</DropdownMenu>
											</Dropdown>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownItem-rightIcon'
							ref={sectionRefs[10]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>rightIcon?: TIcons;</code>
											<div className='text-xs'>{'<DropdownItem />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										<div>
											<Dropdown>
												<DropdownToggle>
													<Button variant='outline'>Click</Button>
												</DropdownToggle>
												<DropdownMenu>
													{[
														'HeroRocketLaunch',
														'HeroShoppingCart',
														'HeroExclamationTriangle',
													].map((item) => (
														<DropdownItem key={item} rightIcon={item}>
															rightIcon - {item}
														</DropdownItem>
													))}
												</DropdownMenu>
											</Dropdown>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='DropdownNavLinkItem-to'
							ref={sectionRefs[10]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>to: string;</code>
											<div className='text-xs'>
												{'<DropdownNavLinkItem />'}
											</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										<div>
											<Dropdown>
												<DropdownToggle>
													<Button variant='outline'>Click</Button>
												</DropdownToggle>
												<DropdownMenu>
													<DropdownItem>DropdownItem</DropdownItem>
													<DropdownNavLinkItem to='/'>
														DropdownNavLinkItem - Homepage
													</DropdownNavLinkItem>
													<DropdownNavLinkItem
														to={
															componentsPages.uiPages.subPages
																.dropdownPage.to
														}>
														DropdownNavLinkItem -{' '}
														{
															componentsPages.uiPages.subPages
																.dropdownPage.text
														}
													</DropdownNavLinkItem>
												</DropdownMenu>
											</Dropdown>
										</div>
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
						<code className='text-xs'>{'<DropdownToggle />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#DropdownToggle-hasIcon'>hasIcon</a>
						</Button>
						<code className='text-xs'>{'<DropdownMenu />'}</code>
						<Button isActive={activeSection === 3}>
							<a href='#DropdownMenu-borderWidth'>borderWidth</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#DropdownMenu-isCloseAfterLeave'>isCloseAfterLeave</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#DropdownMenu-placement'>placement</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#DropdownMenu-rounded'>rounded</a>
						</Button>
						<code className='text-xs'>{'<DropdownItem />'}</code>
						<Button isActive={activeSection === 7}>
							<a href='#DropdownItem-color'>color</a>
						</Button>
						<Button isActive={activeSection === 8}>
							<a href='#DropdownItem-colorIntensity'>colorIntensity</a>
						</Button>
						<Button isActive={activeSection === 9}>
							<a href='#DropdownItem-icon'>icon</a>
						</Button>
						<Button isActive={activeSection === 10}>
							<a href='#DropdownItem-rightIcon'>rightIcon</a>
						</Button>
						<code className='text-xs'>{'<DropdownNavLinkItem />'}</code>
						<Button isActive={activeSection === 11}>
							<a href='#DropdownNavLinkItem-to'>to</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default DropdownClient;
