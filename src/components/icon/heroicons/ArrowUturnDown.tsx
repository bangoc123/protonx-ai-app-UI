import React, { SVGProps } from 'react';

const SvgArrowUturnDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArrowUturnDown;
