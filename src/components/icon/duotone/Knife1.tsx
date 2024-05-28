import React, { SVGProps } from 'react';

const SvgKnife1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.782 14.646l.708.708a1 1 0 010 1.414L3.66 19.596a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l2.828-2.829a1 1 0 011.414 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.49 12.525L17.096 1.92l4.95 4.95a3 3 0 010 4.242l-6.364 6.364a3 3 0 01-4.243 0l-4.95-4.95zm10.667-5.01a1.5 1.5 0 10-2.121-2.122 1.5 1.5 0 002.12 2.122z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgKnife1;
