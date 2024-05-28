import React, { SVGProps } from 'react';

const SvgChartPie = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgChartPie;
