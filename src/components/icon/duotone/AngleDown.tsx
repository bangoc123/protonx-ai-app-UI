import React, { SVGProps } from 'react';

const SvgAngleDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.293 8.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.383.03l-6-5.5a1 1 0 111.352-1.474l5.294 4.853 5.323-5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAngleDown;
