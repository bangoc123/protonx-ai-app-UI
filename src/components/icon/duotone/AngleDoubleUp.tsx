import React, { SVGProps } from 'react';

const SvgAngleDoubleUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.293 19.207a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.383-.03l-6 5.5a1 1 0 001.352 1.474l5.294-4.853 5.323 5.323z'
					fill='currentColor'
				/>
				<path
					d='M17.293 12.207a1 1 0 101.414-1.414l-6-6a1 1 0 00-1.383-.03l-6 5.5a1 1 0 101.352 1.474l5.294-4.853 5.323 5.323z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgAngleDoubleUp;
