import React, { SVGProps } from 'react';

const SvgCurtains = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 4a1 1 0 011-1h7v2a8 8 0 01-8 8V4zm18 0v9a8 8 0 01-8-8V3h7a1 1 0 011 1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4 21a1 1 0 01-1-1v-7a6 6 0 016 6v2H4zm16 0h-5v-2a6 6 0 016-6v7a1 1 0 01-1 1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCurtains;
