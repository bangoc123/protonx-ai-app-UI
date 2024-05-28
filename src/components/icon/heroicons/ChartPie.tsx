import React, { SVGProps } from 'react';

const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChartPie;
