import React, { SVGProps } from 'react';

const SvgShieldThunder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					fill='currentColor'
					opacity={0.3}
					d='M11.333 18L16 11.4h-2.333V7L9 13.6h2.333z'
				/>
			</g>
		</svg>
	);
};

export default SvgShieldThunder;
