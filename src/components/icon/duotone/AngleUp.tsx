import React, { SVGProps } from 'react';

const SvgAngleUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.707 15.707a1 1 0 11-1.414-1.414l6-6a1 1 0 011.383-.03l6 5.5a1 1 0 11-1.352 1.474l-5.294-4.853-5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAngleUp;
