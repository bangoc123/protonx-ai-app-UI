import React, { SVGProps } from 'react';

const SvgWind = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 13v-2h14.5A1.5 1.5 0 0019 9.5V9a1 1 0 00-2 0v1h-2V9a3 3 0 016 0v.5a3.5 3.5 0 01-3.5 3.5H3z'
					fill='currentColor'
				/>
				<path
					d='M3 9V7h6.5A1.5 1.5 0 0011 5.5V5a1 1 0 00-2 0v1H7V5a3 3 0 116 0v.5A3.5 3.5 0 019.5 9H3zm0 6h6.5a3.5 3.5 0 013.5 3.5v.5a3 3 0 01-6 0v-1h2v1a1 1 0 002 0v-.5A1.5 1.5 0 009.5 17H3v-2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgWind;
