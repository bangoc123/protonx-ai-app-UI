'use client';

import { useEffect, useState } from 'react';
import usersDb, { TUser } from '../db/users.db';

const useFakeUserAPI = (username: string) => {
	const allUserData = usersDb;
	const userData = allUserData.filter((f) => f.username === username)[0];

	const getCheckUser = (userNameOrMail: string, password: string) => {
		const filteredUserData = allUserData.filter(
			(f) => f.username === userNameOrMail || f.email === userNameOrMail,
		)[0];

		return new Promise((resolve, reject) => {
			if (!filteredUserData)
				reject(
					new Error('The username is invalid!', {
						cause: 'username',
					}),
				);
			if (filteredUserData.password === password) resolve(true);
			else reject(new Error('The password is invalid!', { cause: 'password' }));
		});
	};

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [response, setResponse] = useState<TUser | undefined>();
	useEffect(() => {
		setTimeout(() => {
			setResponse(userData);
			setIsLoading(false);
		}, 500);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

	return { response, isLoading, getCheckUser, allUserData };
};

export default useFakeUserAPI;
