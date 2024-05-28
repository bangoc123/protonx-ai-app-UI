import React, { SVGProps } from 'react';

const SvgExchange = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-90 13 6)'
					x={12}
					width={2}
					height={12}
					rx={1}
				/>
				<path
					d='M9.707 8.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 6l2.293 2.293z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='matrix(0 -1 -1 0 29 29)'
					x={10}
					y={12}
					width={2}
					height={12}
					rx={1}
				/>
				<path
					d='M14.293 20.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L16.586 18l-2.293 2.293z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgExchange;
