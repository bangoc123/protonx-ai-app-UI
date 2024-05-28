import React, { SVGProps } from 'react';

const SvgQuote1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' d='M11 7l-2 6h2v5H6v-5l2-6z' />
				<path fill='currentColor' opacity={0.3} d='M19 7l-2 6h2v5h-5v-5l2-6z' />
			</g>
		</svg>
	);
};

export default SvgQuote1;
