import React, { SVGProps } from 'react';

const SvgRight2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-90 8.5 12)'
					x={7.5}
					y={7.5}
					width={2}
					height={9}
					rx={1}
				/>
				<path
					d='M11.293 17.293a1 1 0 101.414 1.414l6-6a1 1 0 00.03-1.383l-5.5-6a1 1 0 00-1.474 1.352l4.853 5.294-5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRight2;
