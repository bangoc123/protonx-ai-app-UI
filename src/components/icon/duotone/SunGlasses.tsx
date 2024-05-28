import React, { SVGProps } from 'react';

const SvgSunGlasses = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9.894 16.942l-1.788-.894a4.354 4.354 0 017.788 0l-1.788.894a2.354 2.354 0 00-4.212 0zM21.906 8.12a1 1 0 01.707 1.225l-1.647 6.147a1 1 0 01-1.932-.517l1.647-6.148a1 1 0 011.225-.707zm-19.812 0a1 1 0 011.225.707l1.553 5.796a1 1 0 11-1.932.518L1.387 9.344a1 1 0 01.707-1.225z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.5 20a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm11 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSunGlasses;
