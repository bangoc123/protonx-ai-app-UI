import React, { SVGProps } from 'react';

const SvgQuote2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' d='M14 18l2-6h-2V7h5v5l-2 6z' />
				<path fill='currentColor' opacity={0.3} d='M6 18l2-6H6V7h5v5l-2 6z' />
			</g>
		</svg>
	);
};

export default SvgQuote2;
