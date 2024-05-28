import React, { SVGProps } from 'react';

const SvgChartBar3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={7}
					y={4}
					width={3}
					height={13}
					rx={1.5}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					x={12}
					y={9}
					width={3}
					height={8}
					rx={1.5}
				/>
				<path
					d='M5 19h15a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 112 0v15z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					x={17}
					y={11}
					width={3}
					height={6}
					rx={1.5}
				/>
			</g>
		</svg>
	);
};

export default SvgChartBar3;
