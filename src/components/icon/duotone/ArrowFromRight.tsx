import React, { SVGProps } from 'react';

const SvgArrowFromRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='matrix(0 -1 -1 0 22 22)'
					x={9}
					y={5}
					width={2}
					height={14}
					rx={1}
				/>
				<rect fill='currentColor' opacity={0.3} x={19} y={3} width={2} height={18} rx={1} />
				<path
					d='M10.707 17.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 01-.03-1.383l5.5-6a1 1 0 111.474 1.352L5.384 11.97l5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArrowFromRight;
