import React, { SVGProps } from 'react';

const SvgAngleDoubleLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.707 6.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 00-.03 1.383l5.5 6a1 1 0 001.474-1.352L7.384 12.03l5.323-5.323z'
					fill='currentColor'
				/>
				<path
					d='M19.707 6.707a1 1 0 10-1.414-1.414l-6 6a1 1 0 00-.03 1.383l5.5 6a1 1 0 101.474-1.352l-4.853-5.294 5.323-5.323z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgAngleDoubleLeft;
