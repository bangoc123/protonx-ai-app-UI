import React, { SVGProps } from 'react';

const SvgOutlet = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15 4a1 1 0 011 1v4h-2V5a1 1 0 011-1zM9 4a1 1 0 011 1v4H8V5a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M13 16.93V22h-2v-5.07A7.002 7.002 0 015 10V9h14v1a7.002 7.002 0 01-6 6.93z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgOutlet;
