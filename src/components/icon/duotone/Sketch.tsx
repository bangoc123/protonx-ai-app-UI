import React, { SVGProps } from 'react';

const SvgSketch = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M5 3h14l4 5H1z' />
				<path fill='currentColor' d='M23 8L12 20 1 8z' />
			</g>
		</svg>
	);
};

export default SvgSketch;
