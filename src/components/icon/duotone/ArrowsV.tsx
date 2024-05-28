import React, { SVGProps } from 'react';

const SvgArrowsV = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-90 12 12)'
					x={7}
					y={11}
					width={10}
					height={2}
					rx={1}
				/>
				<path
					d='M6.707 8.707a1 1 0 01-1.414-1.414l6-6a1 1 0 011.383-.03l6 5.5a1 1 0 01-1.352 1.474L12.03 3.384 6.707 8.707zM17.293 15.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.383.03l-6-5.5a1 1 0 111.352-1.474l5.294 4.853 5.323-5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArrowsV;
