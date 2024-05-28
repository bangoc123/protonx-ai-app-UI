import React, { SVGProps } from 'react';

const SvgArrowSmallDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d='M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArrowSmallDown;
