'use client';

import { useEffect, useState } from 'react';

const useMounted = () => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return { mounted };
};

export default useMounted;
