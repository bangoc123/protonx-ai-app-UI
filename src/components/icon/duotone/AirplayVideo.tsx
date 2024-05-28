import React, { SVGProps } from 'react';

const SvgAirplayVideo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7 15a1 1 0 010 2H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3h-1a1 1 0 010-2h1a1 1 0 001-1V7a1 1 0 00-1-1H6a1 1 0 00-1 1v7a1 1 0 001 1h1z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M8 20h8l-4-5z' />
			</g>
		</svg>
	);
};

export default SvgAirplayVideo;
