import React, { useState } from 'react';
import classNames from 'classnames';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';
import { appPages } from '@/config/pages.config';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Tooltip from '@/components/ui/Tooltip';
import Link from 'next/link';
import Icon from '@/components/icon/Icon';
import Button from '@/components/ui/Button';
import OffCanvas, { OffCanvasBody, OffCanvasHeader } from '@/components/ui/OffCanvas';

type TAiType = {
	icon: TIcons;
	color: TColors;
	tagClassName: string;
};
type TAiTypes = {
	[key in 'image' | 'video' | 'audio' | 'code']: TAiType;
};
const aiType: TAiTypes = {
	image: {
		icon: 'HeroPhoto',
		color: 'amber',
		tagClassName: 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/25',
	},
	video: {
		icon: 'HeroFilm',
		color: 'violet',
		tagClassName: 'bg-violet-500/10 text-violet-500 hover:bg-violet-500/25',
	},
	audio: {
		icon: 'HeroMusicalNote',
		color: 'blue',
		tagClassName: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/25',
	},
	code: {
		icon: 'HeroCommandLine',
		color: 'emerald',
		tagClassName: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/25',
	},
};
type TAiHistory = {
	id: number;
	title: string;
	type: TAiType;
	path: string;
};
const aiHistory: TAiHistory[] = [
	{
		id: 1,
		title: 'Can you make a logo with the letter "Z" and the daisy?',
		type: aiType.image,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.photoPage.to}`,
	},
	{
		id: 2,
		title: 'Can you write a simple React component with TypeScript?',
		type: aiType.code,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.codePage.to}`,
	},
	{
		id: 3,
		title: 'Can you make a piano music about spring?',
		type: aiType.audio,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.audioPage.to}`,
	},
	{
		id: 4,
		title: 'Can you create a landing video with water bubbles?',
		type: aiType.video,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.videoPage.to}`,
	},
	{
		id: 5,
		title: 'Can you write a simple React component with TypeScript?',
		type: aiType.code,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.codePage.to}`,
	},
	{
		id: 6,
		title: 'Can you write a simple React component with TypeScript?',
		type: aiType.code,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.codePage.to}`,
	},
	{
		id: 7,
		title: 'Can you make a piano music about spring?',
		type: aiType.audio,
		path: `${appPages.aiAppPages.subPages.chatPages.subPages.audioPage.to}`,
	},
];

const AiSubheaderPartial = () => {
	const [offCanvasStatus, setOffCanvasStatus] = useState<boolean>(false);
	return (
		<Subheader>
			{/* <SubheaderLeft className='max-lg:hidden'>
				{aiHistory.map((item) => (
					<Tooltip key={item.id} text={item.title} placement='bottom'>
						<Link href={item.path}>
							<div
								className={classNames(
									'flex cursor-pointer items-center rounded-full px-4 text-sm transition duration-500 ease-in-out',
									item.type.tagClassName,
								)}>
								<Icon
									icon={item.type.icon}
									color={item.type.color}
									size='text-xl'
									className='me-2'
								/>
								<span className='max-w-[8rem] truncate'>{item.title}</span>
								<Button
									icon='HeroXCircle'
									className='-me-2 !px-0'
									color='red'
									title='Close'
								/>
							</div>
						</Link>
					</Tooltip>
				))}
			</SubheaderLeft> */}
			<SubheaderLeft className='lg:hidden'>
				<Button icon='HeroChatBubbleBottomCenter' onClick={() => setOffCanvasStatus(true)}>
					Chat lists
				</Button>
				<OffCanvas isOpen={offCanvasStatus} setIsOpen={setOffCanvasStatus} position='left'>
					<OffCanvasHeader>Chat Lists</OffCanvasHeader>
					<OffCanvasBody>
						<div className='flex flex-col gap-4'>
							{aiHistory.map((item) => (
								<Tooltip key={item.id} text={item.title} placement='bottom'>
									<Link href={item.path}>
										<div
											className={classNames(
												'flex cursor-pointer items-center rounded-full px-4 text-sm transition duration-500 ease-in-out',
												item.type.tagClassName,
											)}>
											<Icon
												icon={item.type.icon}
												color={item.type.color}
												size='text-xl'
												className='me-2'
											/>
											<span className='grow truncate'>{item.title}</span>
											<Button
												icon='HeroXCircle'
												className='-me-2 flex-shrink-0 !px-0'
												color='red'
											/>
										</div>
									</Link>
								</Tooltip>
							))}
						</div>
					</OffCanvasBody>
				</OffCanvas>
			</SubheaderLeft>
			<SubheaderRight>
				<Link href={`${appPages.aiAppPages.subPages.aiDashboardPage.to}`}>
					<Button variant='solid' icon='HeroPlus'>
						New Chat
					</Button>
				</Link>
			</SubheaderRight>
		</Subheader>
	);
};

export default AiSubheaderPartial;
