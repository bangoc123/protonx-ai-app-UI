'use client';

import { RefObject, useEffect, useState } from 'react';

const useIntersectionObserver = (elementRef: RefObject<HTMLElement>) => {
	const [isInView, setIsInView] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.5 },
		);
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [elementRef]);

	return [isInView];
};

export default useIntersectionObserver;
