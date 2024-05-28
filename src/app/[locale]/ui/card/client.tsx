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
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import MdViewer from '@/components/MdViewer';
import Icon from '@/components/icon/Icon';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import { arrRounded, TRounded } from '@/types/rounded.type';
import CardExample1MD from './_md/CardExample1.md';
import CardExample2MD from './_md/CardExample2.md';
import CardInterfaceMD from './_md/CardInterface.md';

const CardClient = () => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null)];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Card' />
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
							<ExampleView title='Example 1' mdFile={CardExample1MD as string}>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<Icon icon='HeroBeaker' size='text-2xl' />
											<CardTitle>CardTitle</CardTitle>
										</CardHeaderChild>
										<CardHeaderChild>
											<Dropdown>
												<DropdownToggle>
													<Button>Menu</Button>
												</DropdownToggle>
												<DropdownMenu placement='bottom-end'>
													<DropdownItem>Item 1</DropdownItem>
													<DropdownItem>Item 2</DropdownItem>
													<DropdownItem>Item 3</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Curabitur lacinia eros eget aliquam fringilla. Proin ac
										magna at odio condimentum tincidunt ac eget enim.
									</CardBody>
									<CardFooter>
										<CardHeaderChild />
										<CardHeaderChild>
											<Button color='red'>Cancel</Button>
											<Button variant='solid' icon='HeroServer'>
												Save
											</Button>
										</CardHeaderChild>
									</CardFooter>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={CardExample2MD as string}>
								<Card className='border-2 border-zinc-300/25 transition-all duration-300 hover:shadow-xl dark:border-zinc-800/50'>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>CardTitle</CardTitle>
										</CardHeaderChild>
										<CardHeaderChild>
											<Dropdown>
												<DropdownToggle>
													<Button>Menu</Button>
												</DropdownToggle>
												<DropdownMenu placement='bottom-end'>
													<DropdownItem>Item 1</DropdownItem>
													<DropdownItem>Item 2</DropdownItem>
													<DropdownItem>Item 3</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Curabitur lacinia eros eget aliquam fringilla. Proin ac
										magna at odio condimentum tincidunt ac eget enim.
									</CardBody>
									<CardFooter className='border-t-2 border-zinc-300/25 pt-4 dark:border-zinc-800/50'>
										<CardHeaderChild>
											<Button variant='outline' color='red'>
												Cancel
											</Button>
										</CardHeaderChild>
										<CardHeaderChild>
											<Button variant='solid' icon='HeroServer'>
												Save
											</Button>
										</CardHeaderChild>
									</CardFooter>
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
									<MdViewer mdFile={CardInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='Card-rounded'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<code>rounded?: TRounded | 'auto';</code>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										{['auto', ...arrRounded].map((item) => (
											<div
												key={item}
												className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
												<Card
													rounded={item as TRounded | 'auto'}
													className='border-2 border-zinc-300/25 dark:border-zinc-800/50'>
													<CardHeader>
														<CardHeaderChild>
															<CardTitle>
																<code>{item}</code>
															</CardTitle>
														</CardHeaderChild>
													</CardHeader>
													<CardBody>
														Lorem ipsum dolor sit amet, consectetur
														adipiscing elit. Curabitur lacinia eros eget
														aliquam fringilla. Proin ac magna at odio
														condimentum tincidunt ac eget enim.{' '}
													</CardBody>
													<CardFooter>
														<CardFooterChild />
														<CardFooterChild>
															<Button variant='outline'>
																Cancel
															</Button>
															<Button variant='solid'>Save</Button>
														</CardFooterChild>
													</CardFooter>
												</Card>
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
						<code className='text-xs'>{'<Card />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#Card-rounded'>rounded</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default CardClient;
