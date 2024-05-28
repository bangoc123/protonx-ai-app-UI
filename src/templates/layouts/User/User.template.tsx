import React from 'react';
import { NavButton, NavItem, NavSeparator } from '@/components/layouts/Navigation/Nav';
import { appPages, authPages } from '@/config/pages.config';
import Icon from '@/components/icon/Icon';
import Badge from '@/components/ui/Badge';
import User from '@/components/layouts/User/User';
import usersDb from '@/mocks/db/users.db';
import { signOut } from 'next-auth/react';

const UserTemplate = () => {
	return (
		<User
			isLoading={false}
			name={usersDb[5].firstName}
			nameSuffix={usersDb[5]?.isVerified && <Icon icon='HeroCheckBadge' color='blue' />}
			position={usersDb[5]?.position}
			src={usersDb[5]?.image?.thumb}
			suffix={
				<Badge color='amber' variant='solid' className='text-xs font-bold'>
					PRO
				</Badge>
			}>
			<NavSeparator />
			<NavItem {...authPages.profilePage} />
			<NavItem {...appPages.mailAppPages.subPages.inboxPages}>
				<Badge variant='solid' className='leading-none'>
					3
				</Badge>
				<NavButton icon='HeroPlusCircle' title='New Mail' onClick={() => {}} />
			</NavItem>
			<NavItem text='Logout' icon='HeroArrowRightOnRectangle' onClick={() => signOut()} />
		</User>
	);
};

export default UserTemplate;
