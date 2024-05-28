import React, { SVGProps } from 'react';

const SvgUpDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-180 6 11)'
					x={5}
					y={5}
					width={2}
					height={12}
					rx={1}
				/>
				<path
					d='M8.293 14.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L6 16.586l2.293-2.293z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='matrix(-1 0 0 1 36 0)'
					x={17}
					y={7}
					width={2}
					height={12}
					rx={1}
				/>
				<path
					d='M20.293 9.707a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L18 7.414l2.293 2.293z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUpDown;
