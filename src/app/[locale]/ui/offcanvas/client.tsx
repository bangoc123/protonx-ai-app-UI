'use client';

import React, { useRef, useState } from 'react';
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
import OffCanvas, {
	IOffCanvasProps,
	OffCanvasBody,
	OffCanvasFooter,
	OffCanvasFooterChild,
	OffCanvasHeader,
	TOffCanvasPosition,
} from '@/components/ui/OffCanvas';
import OffcanvasInterfaceMD from './_md/OffcanvasInterface.md';
import OffcanvasExample1MD from './_md/OffcanvasExample1.md';
import OffcanvasExample2MD from './_md/OffcanvasExample2.md';

const OffcanvasClient = () => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	const [offCanvasStatus, setOffCanvasStatus] = useState<boolean>(false);

	const [isAnimation, setIsAnimation] = useState<IOffCanvasProps['isAnimation']>(true);
	const [isStaticBackdrop, setIsStaticBackdrop] =
		useState<IOffCanvasProps['isStaticBackdrop']>(false);
	const [position, setPosition] = useState<IOffCanvasProps['position']>('right');

	const setOffCanvasPropsDefault = () => {
		setIsAnimation(true);
		setIsStaticBackdrop(false);
		setPosition('right');
	};

	const [exOffcanvas1, setExOffcanvas1] = useState<boolean>(false);
	const [exOffcanvas2, setExOffcanvas2] = useState<boolean>(false);
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Offcanvas' />
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
							<ExampleView title='Example 1' mdFile={OffcanvasExample1MD as string}>
								<Card>
									<CardBody>
										<Button
											variant='solid'
											onClick={() => setExOffcanvas1(true)}>
											Click!
										</Button>
										<OffCanvas
											isOpen={exOffcanvas1}
											setIsOpen={setExOffcanvas1}>
											<OffCanvasHeader>Header</OffCanvasHeader>
											<OffCanvasBody>Body</OffCanvasBody>
											<OffCanvasFooter>
												<OffCanvasFooterChild>
													<Button
														onClick={() => setExOffcanvas1(false)}
														color='red'>
														Close
													</Button>
												</OffCanvasFooterChild>
												<OffCanvasFooterChild>Child 2</OffCanvasFooterChild>
											</OffCanvasFooter>
										</OffCanvas>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView title='Example 2' mdFile={OffcanvasExample2MD as string}>
								<Card>
									<CardBody>
										<Button
											variant='solid'
											onClick={() => setExOffcanvas2(true)}>
											Click!
										</Button>
										<OffCanvas
											isOpen={exOffcanvas2}
											setIsOpen={setExOffcanvas2}
											position='bottom'>
											<OffCanvasHeader>Header</OffCanvasHeader>
											<OffCanvasBody>Body</OffCanvasBody>
											<OffCanvasFooter>
												<OffCanvasFooterChild>Child 1</OffCanvasFooterChild>
												<OffCanvasFooterChild>Child 2</OffCanvasFooterChild>
											</OffCanvasFooter>
										</OffCanvas>
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
									<MdViewer mdFile={OffcanvasInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='OffCanvas-isAnimation'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isAnimation?: boolean;</code>
											<div className='text-xs'>{'<OffCanvas />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false].map((item) => (
											<div key={String(item)}>
												<Button
													variant='outline'
													onClick={() => {
														setOffCanvasPropsDefault();
														setIsAnimation(item);
														setOffCanvasStatus(true);
													}}>
													isAnimation - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='OffCanvas-isStaticBackdrop'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isStaticBackdrop?: boolean;</code>
											<div className='text-xs'>{'<OffCanvas />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false].map((item) => (
											<div key={String(item)}>
												<Button
													variant='outline'
													onClick={() => {
														setOffCanvasPropsDefault();
														setIsStaticBackdrop(item);
														setOffCanvasStatus(true);
													}}>
													isStaticBackdrop - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='OffCanvas-position'
							ref={sectionRefs[4]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>position?: TOffCanvasPosition;</code>
											<div className='text-xs'>{'<OffCanvas />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['left', 'top', 'right', 'bottom'].map((item) => (
											<div key={String(item)}>
												<Button
													variant='outline'
													onClick={() => {
														setOffCanvasPropsDefault();
														setPosition(item as TOffCanvasPosition);
														setOffCanvasStatus(true);
													}}>
													position - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>

						<OffCanvas
							isOpen={offCanvasStatus}
							setIsOpen={setOffCanvasStatus}
							isAnimation={isAnimation}
							isStaticBackdrop={isStaticBackdrop}
							position={position}>
							<OffCanvasHeader>Header</OffCanvasHeader>
							<OffCanvasBody>Body</OffCanvasBody>
						</OffCanvas>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
						<Button isActive={activeSection === 1} className='!px-0'>
							<a href='#Interface'>Interface</a>
						</Button>
						<code className='text-xs'>{'<OffCanvas />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#OffCanvas-isAnimation'>isAnimation</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#OffCanvas-isStaticBackdrop'>isStaticBackdrop</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#OffCanvas-position'>position</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default OffcanvasClient;
