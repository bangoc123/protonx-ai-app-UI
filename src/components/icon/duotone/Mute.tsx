import React, { SVGProps } from 'react';

const SvgMute = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.586 12l-1.414-1.414a1 1 0 011.414-1.414L19 10.586l1.414-1.414a1 1 0 011.414 1.414L20.414 12l1.414 1.414a1 1 0 01-1.414 1.414L19 13.414l-1.414 1.414a1 1 0 01-1.414-1.414L17.586 12z'
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

export default SvgMute;
