import React, { SVGProps } from 'react';

const SvgChartLine2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 19h15a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 112 0v15z'
					fill='currentColor'
				/>
				<path
					d='M8.73 6.816a1 1 0 10-1.46 1.368l3.75 4a1 1 0 001.38.077l2.959-2.526 3.856 4.885a1 1 0 001.57-1.24l-4.5-5.7a1 1 0 00-1.434-.14l-3.024 2.58L8.73 6.816z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgChartLine2;
