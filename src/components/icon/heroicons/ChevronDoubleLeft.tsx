import React, { SVGProps } from 'react';

const SvgChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='m18.75 19.5-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChevronDoubleLeft;
