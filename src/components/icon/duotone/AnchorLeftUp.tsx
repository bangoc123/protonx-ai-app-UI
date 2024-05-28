import React, { SVGProps } from 'react';

const SvgAnchorLeftUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={5} cy={5} r={3} />
				<path d='M6 6h16v16H6z' />
				<path
					d='M15 11v7a1 1 0 01-2 0v-7h-2a1 1 0 110-2h6a1 1 0 010 2h-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAnchorLeftUp;
