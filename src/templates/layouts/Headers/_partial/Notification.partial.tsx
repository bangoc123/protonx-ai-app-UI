'use client';

import React, { FC, ReactNode } from 'react';
import { TIcons } from '@/types/icons.type';
import { StaticImageData } from 'next/image';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../../components/ui/Dropdown';
import Button from '../../../../components/ui/Button';
import Avatar from '../../../../components/Avatar';
import usersDb from '../../../../mocks/db/users.db';
import productsDb from '../../../../mocks/db/products.db';
import Icon from '../../../../components/icon/Icon';

interface INotificationItemProps {
	image?: string | StaticImageData;
	name: string;
	icon?: TIcons;
	firstLine: ReactNode;
	secondLine: ReactNode;
	isUnread: boolean;
	time: string;
}
const NotificationItem: FC<INotificationItemProps> = ({
	image,
	name,
	icon,
	firstLine,
	secondLine,
	isUnread,
	time,
}) => {
	return (
		<div className='flex min-w-[24rem] gap-2'>
			<div className='relative flex-shrink-0'>
				<Avatar src={image} name={name} />
				{icon && (
					<span className='absolute start-3/4 top-3/4 flex rounded-full bg-blue-500/75 outline outline-2 outline-blue-500/75'>
						<Icon icon={icon} />
					</span>
				)}
			</div>
			<div className='grow'>
				<div className='flex gap-2'>{firstLine}</div>
				<div className='flex gap-2'>{secondLine}</div>
			</div>
			<div className='relative flex flex-shrink-0 items-center'>
				{isUnread && (
					<span className='absolute end-0 top-0 flex h-2 w-2'>
						<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75' />
						<span className='relative inline-flex h-2 w-2 rounded-full bg-red-500' />
					</span>
				)}
				<div className='text-zinc-500'>{time}</div>
			</div>
		</div>
	);
};

const NotificationPartial = () => {
	return (
		<div className='relative'>
			<Dropdown>
				<DropdownToggle hasIcon={false}>
					<Button icon='HeroBell' aria-label='Notification' />
				</DropdownToggle>
				<DropdownMenu
					placement='bottom-end'
					className='flex flex-col flex-wrap divide-y divide-dashed divide-zinc-500/50 p-4 [&>*]:py-4'>
					<NotificationItem
						image={usersDb[0].image?.thumb}
						name={`${usersDb[0].firstName} ${usersDb[0].lastName}`}
						icon='HeroBolt'
						firstLine={
							<>
								<b>{usersDb[0].firstName}</b>
								<span className='text-zinc-500'>@{usersDb[0].username}</span>
							</>
						}
						secondLine={
							<>
								Comment on <b>{productsDb[0].productName}</b>
							</>
						}
						isUnread
						time='1h'
					/>
					<NotificationItem
						image={usersDb[2].image?.thumb}
						name={`${usersDb[2].firstName} ${usersDb[2].lastName}`}
						icon='HeroBolt'
						firstLine={
							<>
								<b>{usersDb[2].firstName}</b>
								<span className='text-zinc-500'>@{usersDb[2].username}</span>
							</>
						}
						secondLine={
							<>
								Comment on <b>{productsDb[1].productName}</b>
							</>
						}
						isUnread
						time='3h'
					/>
					<NotificationItem
						image={usersDb[3].image?.thumb}
						name={`${usersDb[3].firstName} ${usersDb[3].lastName}`}
						firstLine={
							<>
								<b>{usersDb[3].firstName}</b>
								<span className='text-zinc-500'>@{usersDb[3].username}</span>
							</>
						}
						secondLine={
							<>
								Comment on <b>{productsDb[3].productName}</b>
							</>
						}
						isUnread
						time='5h'
					/>
					<NotificationItem
						image={usersDb[4].image?.thumb}
						name={`${usersDb[4].firstName} ${usersDb[4].lastName}`}
						firstLine={
							<>
								<b>{usersDb[4].firstName}</b>
								<span className='text-zinc-500'>@{usersDb[4].username}</span>
							</>
						}
						secondLine={
							<>
								Comment on <b>{productsDb[4].productName}</b>
							</>
						}
						isUnread={false}
						time='9h'
					/>
					<NotificationItem
						image={usersDb[5].image?.thumb}
						name={`${usersDb[5].firstName} ${usersDb[5].lastName}`}
						firstLine={
							<>
								<b>{usersDb[5].firstName}</b>
								<span className='text-zinc-500'>@{usersDb[5].username}</span>
							</>
						}
						secondLine={
							<>
								Comment on <b>{productsDb[5].productName}</b>
							</>
						}
						isUnread={false}
						time='1d'
					/>
				</DropdownMenu>
			</Dropdown>
			<span className='absolute end-0 top-0 flex h-3 w-3'>
				<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75' />
				<span className='relative inline-flex h-3 w-3 rounded-full bg-red-500' />
			</span>
		</div>
	);
};

export default NotificationPartial;
