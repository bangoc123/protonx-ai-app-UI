'use client';

import React, { ReactNode, useRef, useState } from 'react';
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
import Modal, {
	IModalProps,
	ModalBody,
	ModalFooter,
	ModalFooterChild,
	ModalHeader,
} from '@/components/ui/Modal';
import themeConfig from '@/config/theme.config';
import { arrScreens } from '@/types/screens.type';
import { arrRounded } from '@/types/rounded.type';
import ModalExample1MD from './_md/ModalExample1.md';
import ModalInterfaceMD from './_md/ModalInterface.md';

const EX_CONTENT = {
	SHORT: 'Modal Body Content',
	LONG: (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, purus
				placerat tempor vestibulum, magna odio porta eros, ut aliquet mi erat et erat. Fusce
				facilisis neque eu sapien suscipit posuere et ac sapien. Mauris scelerisque nulla a
				tempor tincidunt. Proin molestie orci in turpis cursus ornare. Mauris pulvinar
				cursus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
				per inceptos himenaeos. Morbi sollicitudin lectus ac arcu finibus, hendrerit
				bibendum tortor posuere.
			</p>
			<p>
				Donec vel eros magna. Nullam auctor, augue sit amet convallis viverra, purus dolor
				accumsan lacus, id tempor justo ante volutpat turpis. Curabitur sapien elit,
				tincidunt vitae erat id, mattis luctus nibh. Nulla imperdiet ipsum non libero
				venenatis ultricies quis non nisl. Nam scelerisque fermentum dui. Maecenas
				condimentum ullamcorper urna, quis ultrices ante dapibus eu. Integer dignissim massa
				a justo porta congue. Nulla quis orci fermentum, efficitur dui quis, blandit augue.
				Sed sagittis pretium hendrerit. Fusce imperdiet, magna vitae auctor feugiat, orci
				mauris ultrices neque, at vestibulum nisl augue at lorem. Etiam quis dignissim quam,
				pharetra placerat purus. Quisque ultrices convallis finibus. Curabitur id posuere
				elit, sit amet laoreet augue.
			</p>
			<p>
				Suspendisse a turpis vitae est dignissim vulputate eget sed sem. Donec enim leo,
				volutpat non elit id, ornare posuere massa. Nullam laoreet nulla at malesuada
				pharetra. Proin a velit ac enim fermentum tristique. Vivamus ultricies laoreet
				velit, ac rhoncus sem tincidunt non. Donec faucibus tellus vitae justo dignissim
				facilisis. Maecenas in tellus in neque congue vestibulum eu maximus mi. Nullam
				molestie, sapien vel efficitur laoreet, justo augue imperdiet tellus, ut imperdiet
				ipsum leo congue purus. Nunc sagittis ipsum vel magna blandit, nec sagittis arcu
				auctor. Vivamus vulputate feugiat imperdiet.
			</p>
			<p>
				Nulla sed bibendum sapien, eget feugiat purus. Vestibulum ante ipsum primis in
				faucibus orci luctus et ultrices posuere cubilia curae; Maecenas accumsan, quam
				vitae suscipit sollicitudin, ante orci pulvinar nibh, eu consectetur odio nibh non
				arcu. Aenean iaculis, nisi id vestibulum finibus, lorem augue laoreet ligula, sed
				aliquam ligula velit nec erat. Vestibulum eu faucibus libero. Proin id mi consequat,
				egestas nibh ac, efficitur tortor. Etiam dapibus tincidunt lobortis. Proin fermentum
				condimentum enim, sit amet congue lorem ultricies quis. Donec sagittis bibendum
				dolor, nec ornare nulla. In sit amet leo a nulla fermentum pellentesque. Aenean nec
				tempus eros. Integer ut magna maximus, fermentum ante vel, finibus dolor. Etiam nec
				ante nibh. Quisque ac justo rhoncus nulla mollis semper. Donec tortor risus,
				facilisis nec tempus a, congue eu quam.
			</p>
			<p>
				Integer pretium felis sit amet erat ultrices semper. Sed id ipsum odio. Donec quis
				cursus ex, id posuere nunc. Maecenas ut eros ultrices, tempus velit sodales, finibus
				eros. Proin quis lacinia dui, ac sagittis neque. Duis condimentum viverra tortor ac
				molestie. Donec congue leo ipsum. Vivamus venenatis vestibulum lacus, sit amet
				tincidunt magna porttitor at. Phasellus in odio aliquet dui commodo elementum.
				Quisque scelerisque euismod ex at placerat. Proin gravida lorem sed interdum
				dapibus. Fusce a aliquam magna, eget ullamcorper urna.
			</p>
			<p>
				Nam facilisis ex a est viverra, sit amet ultrices leo rutrum. Ut pretium, nulla quis
				malesuada tincidunt, magna felis suscipit orci, eu malesuada erat purus luctus est.
				Aenean malesuada at tortor in varius. Sed ullamcorper enim ut metus gravida, a
				ullamcorper mi maximus. Quisque scelerisque vel nisi nec accumsan. Sed vitae elit ac
				magna feugiat pulvinar. Nunc in velit ut tellus convallis aliquam nec vitae urna. In
				ac consequat libero. Duis maximus bibendum orci et mollis. Vivamus eu enim
				malesuada, elementum diam quis, rhoncus odio. Integer quam nibh, blandit eget arcu
				quis, ornare euismod lectus. Nunc pharetra id massa id posuere. Nullam ligula eros,
				sodales eget arcu id, convallis volutpat erat. Proin interdum ligula at aliquet
				congue. Proin ut orci nisi. Nulla et lectus sed lacus dapibus gravida viverra et
				dolor.
			</p>
			<p>
				Etiam molestie tellus mauris, a hendrerit erat fringilla id. Cras viverra erat
				ornare, laoreet velit eu, interdum mi. Etiam pretium sollicitudin sem a imperdiet.
				Cras suscipit congue auctor. Maecenas fermentum nunc varius metus cursus, quis
				consectetur risus faucibus. Donec porta risus iaculis, scelerisque nisl vitae,
				consequat massa. Etiam mauris magna, posuere sed sem et, interdum dapibus elit.
				Morbi et enim ultricies, euismod est sed, imperdiet augue. Nunc lectus purus,
				ultricies ac vehicula at, accumsan et est. Ut pretium rutrum turpis, nec aliquet
				diam blandit ac. Suspendisse pellentesque finibus ipsum, non gravida sem egestas
				vitae. In vitae velit neque.
			</p>
			<p>
				Morbi vehicula turpis eget tortor consectetur tempus. Nunc id cursus nibh. Maecenas
				commodo mi ac nibh mollis, ac egestas nisi sodales. Maecenas libero dolor, suscipit
				vitae libero quis, condimentum commodo mi. In mi mauris, mollis vel condimentum
				tristique, finibus id urna. Etiam sit amet tempus metus. Praesent id ante sed tortor
				consequat dictum. Proin dictum ligula ac convallis laoreet. Nulla condimentum
				lobortis fermentum. Nam lobortis lorem vitae augue maximus hendrerit at at ante.
				Integer scelerisque eget tellus vitae rutrum. Donec et diam at purus maximus
				consequat. Ut in fermentum ligula.
			</p>
			<p>
				Nunc eget eros ex. Maecenas fringilla dictum libero, ac consequat urna ornare non.
				Nunc dapibus felis tortor, non efficitur nulla porttitor id. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
				convallis ex quis ante fermentum elementum. Suspendisse at efficitur lacus. Proin eu
				vestibulum est. Nunc massa libero, placerat interdum vestibulum vitae, pretium non
				ligula. Suspendisse eget ante ultricies ante tempus tempor et pellentesque leo.
				Vestibulum accumsan ullamcorper risus, nec viverra dolor eleifend ac. Mauris egestas
				mattis lacus, commodo varius nisi volutpat eu. Quisque lacinia at lectus et
				vulputate. In at turpis tempor, bibendum purus vitae, auctor ipsum. Praesent
				placerat pellentesque lacus non elementum. Morbi mollis at lacus in volutpat.
				Vivamus vel quam ante.
			</p>
		</div>
	),
};

const ModalClient = () => {
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

	const [exModal1, setExModal1] = useState<boolean>(false);
	const [exModal2, setExModal2] = useState<boolean>(false);
	const [exModal3, setExModal3] = useState<boolean>(false);

	const [modalStatus, setModalStatus] = useState<boolean>(false);

	const [fullScreen, setFullScreen] = useState<IModalProps['fullScreen']>(false);
	const [isAnimation, setIsAnimation] = useState<IModalProps['isAnimation']>(true);
	const [isCentered, setIsCentered] = useState<IModalProps['isCentered']>(false);
	const [isScrollable, setIsScrollable] = useState<IModalProps['isScrollable']>(false);
	const [isStaticBackdrop, setIsStaticBackdrop] =
		useState<IModalProps['isStaticBackdrop']>(false);
	const [rounded, setRounded] = useState<IModalProps['rounded']>(themeConfig.rounded);
	const [size, setSize] = useState<IModalProps['size']>('md');

	const [modalBodyContent, setModalBodyContent] = useState<ReactNode>(EX_CONTENT.SHORT);

	const setModalPropsDefault = () => {
		setModalBodyContent(EX_CONTENT.SHORT);
		setFullScreen(false);
		setIsAnimation(true);
		setIsCentered(false);
		setIsScrollable(false);
		setIsStaticBackdrop(false);
		setRounded(themeConfig.rounded);
		setSize('md');
	};

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Modal' />
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
							<ExampleView title='Example 1' mdFile={ModalExample1MD as string}>
								<Card>
									<CardBody>
										<Button onClick={() => setExModal1(true)} variant='solid'>
											Click!
										</Button>
										<Modal isOpen={exModal1} setIsOpen={setExModal1}>
											<ModalHeader>Modal Title Here</ModalHeader>
											<ModalBody>Modal content here.</ModalBody>
											<ModalFooter>
												<ModalFooterChild>Footer Child 1</ModalFooterChild>
												<ModalFooterChild>
													<Button color='red'>Button 1</Button>
													<Button variant='solid'>Button 2</Button>
												</ModalFooterChild>
											</ModalFooter>
										</Modal>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 2' mdFile={ModalExample1MD as string}>
								<Card>
									<CardBody>
										<Button onClick={() => setExModal2(true)} variant='solid'>
											Click!
										</Button>
										<Modal isOpen={exModal2} setIsOpen={setExModal2} fullScreen>
											<ModalHeader>Modal Title Here</ModalHeader>
											<ModalBody>{modalBodyContent}</ModalBody>
											<ModalFooter>
												<ModalFooterChild>Footer Child 1</ModalFooterChild>
												<ModalFooterChild>
													<Button color='red'>Button 1</Button>
													<Button variant='solid'>Button 2</Button>
												</ModalFooterChild>
											</ModalFooter>
										</Modal>
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-4'>
							<ExampleView title='Example 3' mdFile={ModalExample1MD as string}>
								<Card>
									<CardBody>
										<Button onClick={() => setExModal3(true)} variant='solid'>
											Click!
										</Button>
										<Modal
											isOpen={exModal3}
											setIsOpen={setExModal3}
											isScrollable>
											<ModalHeader>Modal Title Here</ModalHeader>
											<ModalBody>{EX_CONTENT.LONG}</ModalBody>
											<ModalFooter>
												<ModalFooterChild>Footer Child 1</ModalFooterChild>
												<ModalFooterChild>
													<Button color='red'>Button 1</Button>
													<Button variant='solid'>Button 2</Button>
												</ModalFooterChild>
											</ModalFooter>
										</Modal>
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
									<MdViewer mdFile={ModalInterfaceMD as string} />
								</CardBody>
							</Card>
						</div>
						<div
							id='Modal-fullScreen'
							ref={sectionRefs[2]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>fullScreen?: TScreens | boolean;</code>
											<div className='text-xs'>{'<Modal />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{[true, false, ...arrScreens].map((item) => (
											<div key={String(item)}>
												<Button
													variant='outline'
													onClick={() => {
														setModalPropsDefault();
														setFullScreen(item);
														setModalStatus(true);
													}}>
													fullScreen - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Modal-isAnimation'
							ref={sectionRefs[3]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isAnimation?: boolean;</code>
											<div className='text-xs'>{'<Modal />'}</div>
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
														setModalPropsDefault();
														setIsAnimation(item);
														setModalStatus(true);
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
							id='Modal-isCentered'
							ref={sectionRefs[4]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isCentered?: boolean;</code>
											<div className='text-xs'>{'<Modal />'}</div>
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
														setModalPropsDefault();
														setIsCentered(item);
														setModalStatus(true);
													}}>
													isCentered - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Modal-isScrollable'
							ref={sectionRefs[5]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isScrollable?: boolean;</code>
											<div className='text-xs'>{'<Modal />'}</div>
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
														setModalPropsDefault();
														setModalBodyContent(EX_CONTENT.LONG);
														setIsScrollable(item);
														setModalStatus(true);
													}}>
													isScrollable - {String(item)}
												</Button>
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div
							id='Modal-isStaticBackdrop'
							ref={sectionRefs[6]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>isStaticBackdrop?: boolean;</code>
											<div className='text-xs'>{'<Modal />'}</div>
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
														setModalPropsDefault();
														setIsStaticBackdrop(item);
														setModalStatus(true);
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
							id='Modal-rounded'
							ref={sectionRefs[7]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>rounded?: TRounded;</code>
											<div className='text-xs'>{'<Modal />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{arrRounded.map((item) => (
											<div key={String(item)}>
												<Button
													variant='outline'
													onClick={() => {
														setModalPropsDefault();
														setRounded(item);
														setModalStatus(true);
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
							id='Modal-size'
							ref={sectionRefs[8]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle className='flex flex-col items-baseline'>
											<code>size?: TModalSize;</code>
											<div className='text-xs'>{'<Modal />'}</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap items-center gap-4'>
										{['20vw', 500, 'sm', 'md', 'lg', 'xl', '2xl'].map(
											(item) => (
												<div key={String(item)}>
													<Button
														variant='outline'
														onClick={() => {
															setModalPropsDefault();
															setSize(item);
															setModalStatus(true);
														}}>
														size - {String(item)}
													</Button>
												</div>
											),
										)}
									</div>
								</CardBody>
							</Card>
						</div>

						<Modal
							isOpen={modalStatus}
							setIsOpen={setModalStatus}
							fullScreen={fullScreen}
							isAnimation={isAnimation}
							isCentered={isCentered}
							isScrollable={isScrollable}
							isStaticBackdrop={isStaticBackdrop}
							rounded={rounded}
							size={size}>
							<ModalHeader>Modal Title</ModalHeader>
							<ModalBody>{modalBodyContent}</ModalBody>
							<ModalFooter>
								<ModalFooterChild>ModalFooterChild 1</ModalFooterChild>
								<ModalFooterChild>ModalFooterChild 2</ModalFooterChild>
							</ModalFooter>
						</Modal>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
						<Button isActive={activeSection === 1} className='!px-0'>
							<a href='#Interface'>Interface</a>
						</Button>
						<code className='text-xs'>{'<Modal />'}</code>
						<Button isActive={activeSection === 2}>
							<a href='#Modal-fullScreen'>fullScreen</a>
						</Button>
						<Button isActive={activeSection === 3}>
							<a href='#Modal-isAnimation'>isAnimation</a>
						</Button>
						<Button isActive={activeSection === 4}>
							<a href='#Modal-isCentered'>isCentered</a>
						</Button>
						<Button isActive={activeSection === 5}>
							<a href='#Modal-isScrollable'>isScrollable</a>
						</Button>
						<Button isActive={activeSection === 6}>
							<a href='#Modal-isStaticBackdrop'>isStaticBackdrop</a>
						</Button>
						<Button isActive={activeSection === 7}>
							<a href='#Modal-rounded'>rounded</a>
						</Button>
						<Button isActive={activeSection === 8}>
							<a href='#Modal-size'>size</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default ModalClient;
