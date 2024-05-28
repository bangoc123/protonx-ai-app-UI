import React, { SVGProps } from 'react';

const SvgZoomPlus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z'
					fill='currentColor'
				/>
				<path
					d='M10.5 10.5v-1a.5.5 0 111 0v1h1a.5.5 0 110 1h-1v1a.5.5 0 11-1 0v-1h-1a.5.5 0 110-1h1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgZoomPlus;
