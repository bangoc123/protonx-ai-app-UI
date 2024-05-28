import React, { SVGProps } from 'react';

const SvgKnife2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.61 15.768a1 1 0 010 1.414l-3.535 3.536a1 1 0 01-1.414 0l-.707-.708a1 1 0 010-1.414l3.536-3.535a1 1 0 011.414 0l.707.707z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M18.51 2.04a7 7 0 010 9.9l-5.656 5.656-4.95-4.95L18.51 2.04z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgKnife2;
