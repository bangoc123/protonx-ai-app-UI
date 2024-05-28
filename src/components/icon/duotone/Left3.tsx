import React, { SVGProps } from 'react';

const SvgLeft3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.707 14.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 01-.03-1.383l5.5-6a1 1 0 111.474 1.352L8.384 8.97l5.323 5.323z'
					fill='currentColor'
				/>
				<path
					d='M11.5 8a1 1 0 000 2H18a1 1 0 011 1v10.042a1 1 0 002 0V11a3 3 0 00-3-3h-6.5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgLeft3;
