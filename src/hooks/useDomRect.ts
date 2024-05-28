'use client';

import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

const useDomRect = (ref: RefObject<HTMLElement>): [DOMRect | null] => {
	const [domRect, setDomRect] = useState<DOMRect | null>(null);

	useLayoutEffect(() => {
		setDomRect(ref?.current && ref.current.getBoundingClientRect());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const scrollHandler = () => {
			setDomRect(ref?.current && ref.current.getBoundingClientRect());
		};
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [domRect];
};

export default useDomRect;
