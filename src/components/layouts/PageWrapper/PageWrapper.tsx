'use client';

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { redirect, usePathname } from 'next/navigation';
import purePathnameUtil from '@/utils/purePathname.util';
import { signIn, useSession } from 'next-auth/react';
import usersDb from '@/mocks/db/users.db';

interface IPageWrapperProps {
	children: ReactNode;
	className?: string;
}
const PageWrapper: FC<IPageWrapperProps> = (props) => {
	const { children, className = undefined, ...rest } = props;

	const pathname = usePathname();
	const purePath = purePathnameUtil(pathname);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: session, status } = useSession({
		required: true,
		async onUnauthenticated() {
			if (purePath !== '/login') {
				await signIn('credentials', {
					username: usersDb[5].username,
					password: usersDb[5].password,
					redirect: false,
				});
			}
		},
	});

	return (
		<main
			data-component-name='PageWrapper'
			className={classNames('flex shrink-0 grow flex-col', className)}
			{...rest}>
			{children}
		</main>
	);
};

export default PageWrapper;
