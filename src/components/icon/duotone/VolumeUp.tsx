import React, { SVGProps } from 'react';

const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 11V9a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2h-2a1 1 0 010-2h2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7 16l-3.392-.678A2 2 0 012 13.36v-2.72a2 2 0 011.608-1.962L7 8l3.293-3.293A1 1 0 0112 5.414v13.172a1 1 0 01-1.707.707L7 16z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgVolumeUp;
