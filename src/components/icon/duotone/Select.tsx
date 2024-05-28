import React, { SVGProps } from 'react';

const SvgSelect = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18.5 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 13a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-13 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.5 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM11 4h2a1 1 0 010 2h-2a1 1 0 010-2zm0 14h2a1 1 0 010 2h-2a1 1 0 010-2zm-6-8a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSelect;
