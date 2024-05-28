'use client';

import React, { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { authPages } from '@/config/pages.config';
import { TUser } from '@/mocks/db/users.db';
import useLocalStorage from '../hooks/useLocalStorage';
import useFakeUserAPI from '../mocks/hooks/useFakeUserAPI';

export interface IAuthContextProps {
	usernameStorage: string | ((newValue: string | null) => void) | null;
	onLogin: (username: string, password: string) => Promise<void>;
	onLogout: () => void;
	userData: TUser;
	isLoading: boolean;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthProviderProps {
	children: ReactNode;
}
export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
	const [usernameStorage, setUserName] = useLocalStorage('user', null);

	const { response, isLoading, getCheckUser } = useFakeUserAPI(usernameStorage as string);
	const userData = response as TUser;

	const router = useRouter();

	// call this function when you want to authenticate the user
	const onLogin = async (username: string, password: string) => {
		await getCheckUser(username, password).then(async () => {
			if (typeof setUserName === 'function')
				await setUserName(username).then(() => router.push('/'));
		});
	};

	// call this function to sign out logged-in user
	const onLogout = async () => {
		if (typeof setUserName === 'function') await setUserName(null);
		router.push(`${authPages.loginPage.to}`, { scroll: false });
	};

	const value: IAuthContextProps = useMemo(
		() => ({
			usernameStorage,
			onLogin,
			onLogout,
			userData,
			isLoading,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[usernameStorage, userData],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
