'use client';

import React, { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
	children: ReactNode;
}
const NextAuthProvider: FC<AuthProviderProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
