import React, { SVGProps } from 'react';

const SvgChevronUpDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChevronUpDown;
