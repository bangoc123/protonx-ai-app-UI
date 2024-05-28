import React, { SVGProps } from 'react';

const SvgAppleWatch = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M16.45 4.176a1 1 0 01-.99 1.737 7 7 0 10-.031 12.19 1 1 0 01.981 1.744 9 9 0 11.04-15.671z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M18.5 6A2.5 2.5 0 0121 8.5v7a2.5 2.5 0 11-5 0v-7A2.5 2.5 0 0118.5 6zm0 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAppleWatch;
