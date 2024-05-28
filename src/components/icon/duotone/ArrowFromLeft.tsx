import React, { SVGProps } from 'react';

const SvgArrowFromLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-90 14 12)'
					x={13}
					y={5}
					width={2}
					height={14}
					rx={1}
				/>
				<rect fill='currentColor' opacity={0.3} x={3} y={3} width={2} height={18} rx={1} />
				<path
					d='M13.293 17.293a1 1 0 001.414 1.414l6-6a1 1 0 00.03-1.383l-5.5-6a1 1 0 00-1.474 1.352l4.853 5.294-5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArrowFromLeft;
