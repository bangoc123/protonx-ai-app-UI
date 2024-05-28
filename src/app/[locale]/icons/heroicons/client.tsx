'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { TIcons } from '@/types/icons.type';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layouts/Subheader/Subheader';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import Badge from '@/components/ui/Badge';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Container from '@/components/layouts/Container/Container';

const iconList: TIcons[] = [
	'HeroAcademicCap',
	'HeroAdjustmentsHorizontal',
	'HeroAdjustmentsVertical',
	'HeroArchiveBoxArrowDown',
	'HeroArchiveBoxXMark',
	'HeroArchiveBox',
	'HeroArrowDownCircle',
	'HeroArrowDownLeft',
	'HeroArrowDownOnSquareStack',
	'HeroArrowDownOnSquare',
	'HeroArrowDownRight',
	'HeroArrowDownTray',
	'HeroArrowDown',
	'HeroArrowLeftCircle',
	'HeroArrowLeftOnRectangle',
	'HeroArrowLeft',
	'HeroArrowLongDown',
	'HeroArrowLongLeft',
	'HeroArrowLongRight',
	'HeroArrowLongUp',
	'HeroArrowPathRoundedSquare',
	'HeroArrowPath',
	'HeroArrowRightCircle',
	'HeroArrowRightOnRectangle',
	'HeroArrowRight',
	'HeroArrowSmallDown',
	'HeroArrowSmallLeft',
	'HeroArrowSmallRight',
	'HeroArrowSmallUp',
	'HeroArrowTopRightOnSquare',
	'HeroArrowTrendingDown',
	'HeroArrowTrendingUp',
	'HeroArrowUpCircle',
	'HeroArrowUpLeft',
	'HeroArrowUpOnSquareStack',
	'HeroArrowUpOnSquare',
	'HeroArrowUpRight',
	'HeroArrowUpTray',
	'HeroArrowUp',
	'HeroArrowUturnDown',
	'HeroArrowUturnLeft',
	'HeroArrowUturnRight',
	'HeroArrowUturnUp',
	'HeroArrowsPointingIn',
	'HeroArrowsPointingOut',
	'HeroArrowsRightLeft',
	'HeroArrowsUpDown',
	'HeroAtSymbol',
	'HeroBackspace',
	'HeroBackward',
	'HeroBanknotes',
	'HeroBars2',
	'HeroBars3BottomLeft',
	'HeroBars3BottomRight',
	'HeroBars3CenterLeft',
	'HeroBars3',
	'HeroBars4',
	'HeroBarsArrowDown',
	'HeroBarsArrowUp',
	'HeroBattery0',
	'HeroBattery100',
	'HeroBattery50',
	'HeroBeaker',
	'HeroBellAlert',
	'HeroBellSlash',
	'HeroBellSnooze',
	'HeroBell',
	'HeroBoltSlash',
	'HeroBolt',
	'HeroBookOpen',
	'HeroBookmarkSlash',
	'HeroBookmarkSquare',
	'HeroBookmark',
	'HeroBriefcase',
	'HeroBugAnt',
	'HeroBuildingLibrary',
	'HeroBuildingOffice2',
	'HeroBuildingOffice',
	'HeroBuildingStorefront',
	'HeroCake',
	'HeroCalculator',
	'HeroCalendarDays',
	'HeroCalendar',
	'HeroCamera',
	'HeroChartBarSquare',
	'HeroChartBar',
	'HeroChartPie',
	'HeroChatBubbleBottomCenterText',
	'HeroChatBubbleBottomCenter',
	'HeroChatBubbleLeftEllipsis',
	'HeroChatBubbleLeftRight',
	'HeroChatBubbleLeft',
	'HeroChatBubbleOvalLeftEllipsis',
	'HeroChatBubbleOvalLeft',
	'HeroCheckBadge',
	'HeroCheckCircle',
	'HeroCheck',
	'HeroChevronDoubleDown',
	'HeroChevronDoubleLeft',
	'HeroChevronDoubleRight',
	'HeroChevronDoubleUp',
	'HeroChevronDown',
	'HeroChevronLeft',
	'HeroChevronRight',
	'HeroChevronUpDown',
	'HeroChevronUp',
	'HeroCircleStack',
	'HeroClipboardDocumentCheck',
	'HeroClipboardDocumentList',
	'HeroClipboardDocument',
	'HeroClipboard',
	'HeroClock',
	'HeroCloudArrowDown',
	'HeroCloudArrowUp',
	'HeroCloud',
	'HeroCodeBracketSquare',
	'HeroCodeBracket',
	'HeroCog6Tooth',
	'HeroCog8Tooth',
	'HeroCog',
	'HeroCommandLine',
	'HeroComputerDesktop',
	'HeroCpuChip',
	'HeroCreditCard',
	'HeroCubeTransparent',
	'HeroCube',
	'HeroCurrencyBangladeshi',
	'HeroCurrencyDollar',
	'HeroCurrencyEuro',
	'HeroCurrencyPound',
	'HeroCurrencyRupee',
	'HeroCurrencyYen',
	'HeroCursorArrowRays',
	'HeroCursorArrowRipple',
	'HeroDevicePhoneMobile',
	'HeroDeviceTablet',
	'HeroDocumentArrowDown',
	'HeroDocumentArrowUp',
	'HeroDocumentChartBar',
	'HeroDocumentCheck',
	'HeroDocumentDuplicate',
	'HeroDocumentMagnifyingGlass',
	'HeroDocumentMinus',
	'HeroDocumentPlus',
	'HeroDocumentText',
	'HeroDocument',
	'HeroEllipsisHorizontalCircle',
	'HeroEllipsisHorizontal',
	'HeroEllipsisVertical',
	'HeroEnvelopeOpen',
	'HeroEnvelope',
	'HeroExclamationCircle',
	'HeroExclamationTriangle',
	'HeroEyeDropper',
	'HeroEyeSlash',
	'HeroEye',
	'HeroFaceFrown',
	'HeroFaceSmile',
	'HeroFilm',
	'HeroFingerPrint',
	'HeroFire',
	'HeroFlag',
	'HeroFolderArrowDown',
	'HeroFolderMinus',
	'HeroFolderOpen',
	'HeroFolderPlus',
	'HeroFolder',
	'HeroForward',
	'HeroFunnel',
	'HeroGif',
	'HeroGiftTop',
	'HeroGift',
	'HeroGlobeAlt',
	'HeroGlobeAmericas',
	'HeroGlobeAsiaAustralia',
	'HeroGlobeEuropeAfrica',
	'HeroHandRaised',
	'HeroHandThumbDown',
	'HeroHandThumbUp',
	'HeroHashtag',
	'HeroHeart',
	'HeroHomeModern',
	'HeroHome',
	'HeroIdentification',
	'HeroInboxArrowDown',
	'HeroInboxStack',
	'HeroInbox',
	'HeroInformationCircle',
	'HeroKey',
	'HeroLanguage',
	'HeroLifebuoy',
	'HeroLightBulb',
	'HeroLink',
	'HeroListBullet',
	'HeroLockClosed',
	'HeroLockOpen',
	'HeroMagnifyingGlassCircle',
	'HeroMagnifyingGlassMinus',
	'HeroMagnifyingGlassPlus',
	'HeroMagnifyingGlass',
	'HeroMapPin',
	'HeroMap',
	'HeroMegaphone',
	'HeroMicrophone',
	'HeroMinusCircle',
	'HeroMinusSmall',
	'HeroMinus',
	'HeroMoon',
	'HeroMusicalNote',
	'HeroNewspaper',
	'HeroNoSymbol',
	'HeroPaintBrush',
	'HeroPaperAirplane',
	'HeroPaperClip',
	'HeroPauseCircle',
	'HeroPause',
	'HeroPencilSquare',
	'HeroPencil',
	'HeroPhoneArrowDownLeft',
	'HeroPhoneArrowUpRight',
	'HeroPhoneXMark',
	'HeroPhone',
	'HeroPhoto',
	'HeroPlayCircle',
	'HeroPlayPause',
	'HeroPlusCircle',
	'HeroPlusSmall',
	'HeroPlus',
	'HeroPower',
	'HeroPresentationChartBar',
	'HeroPresentationChartLine',
	'HeroPrinter',
	'HeroPuzzlePiece',
	'HeroQrCode',
	'HeroQuestionMarkCircle',
	'HeroQueueList',
	'HeroRadio',
	'HeroReceiptPercent',
	'HeroReceiptRefund',
	'HeroRectangleGroup',
	'HeroRectangleStack',
	'HeroRocketLaunch',
	'HeroRss',
	'HeroScale',
	'HeroScissors',
	'HeroServerStack',
	'HeroServer',
	'HeroShare',
	'HeroShieldCheck',
	'HeroShieldExclamation',
	'HeroShoppingBag',
	'HeroShoppingCart',
	'HeroSignalSlash',
	'HeroSignal',
	'HeroSparkles',
	'HeroSpeakerWave',
	'HeroSpeakerXMark',
	'HeroSquare2Stack',
	'HeroSquare3Stack3D',
	'HeroSquares2X2',
	'HeroSquaresPlus',
	'HeroStar',
	'HeroStopCircle',
	'HeroStop',
	'HeroSun',
	'HeroSwatch',
	'HeroTableCells',
	'HeroTag',
	'HeroTicket',
	'HeroTrash',
	'HeroTrophy',
	'HeroTruck',
	'HeroTv',
	'HeroUserCircle',
	'HeroUserGroup',
	'HeroUserMinus',
	'HeroUserPlus',
	'HeroUser',
	'HeroUsers',
	'HeroVariable',
	'HeroVideoCameraSlash',
	'HeroVideoCamera',
	'HeroViewColumns',
	'HeroViewfinderCircle',
	'HeroWallet',
	'HeroWifi',
	'HeroWindow',
	'HeroWrenchScrewdriver',
	'HeroWrench',
	'HeroXCircle',
	'HeroXMark',
];
const HeroIconsClient = () => {
	const [globalFilter, setGlobalFilter] = useState<string>('');

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Icons' currentPage='Heroicons' />
					<SubheaderSeparator />
					<Badge variant='outline' className='flex gap-2 border-transparent'>
						<span>Icons:</span>
						<b>
							{iconList.filter((key) => key.includes(globalFilter)).length}/
							{iconList.length}
						</b>
					</Badge>
				</SubheaderLeft>
				<SubheaderRight>
					<FieldWrap
						firstSuffix={<Icon className='mx-2' icon='HeroMagnifyingGlass' />}
						lastSuffix={
							globalFilter && (
								<Icon
									icon='HeroXMark'
									color='red'
									className='mx-2 cursor-pointer'
									onClick={() => {
										setGlobalFilter('');
									}}
								/>
							)
						}>
						<Input
							id='example'
							name='example'
							placeholder='Search...'
							value={globalFilter ?? ''}
							onChange={(e) => setGlobalFilter(e.target.value)}
						/>
					</FieldWrap>
				</SubheaderRight>
			</Subheader>
			<Container>
				<div className='grid gap-4 text-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12'>
					{iconList
						.filter((key) => key.includes(globalFilter))
						.map((iconName) => (
							<button
								type='button'
								key={iconName}
								className='flex flex-col items-center justify-center rounded-lg border border-zinc-300/25 py-4 dark:border-zinc-800/50'
								onClick={() => {
									navigator.clipboard
										.writeText(iconName)
										.then(() => {})
										.catch(() => {});
								}}>
								<Icon icon={iconName} className='text-4xl' />
								<div className='text-xs text-zinc-500'>{iconName}</div>
							</button>
						))}
				</div>
			</Container>
		</PageWrapper>
	);
};

export default HeroIconsClient;
