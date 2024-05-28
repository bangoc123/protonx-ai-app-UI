import React, { SVGProps } from 'react';

const SvgChevronDoubleDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='m19.5 5.25-7.5 7.5-7.5-7.5m15 6-7.5 7.5-7.5-7.5'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChevronDoubleDown;
