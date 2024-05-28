import React, { SVGProps } from 'react';

const SvgThunderNight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.228.205a5 5 0 006.69 5.465 5 5 0 11-6.69-5.465zM10.088 24v-4H7.868l4.444-6v4h2.222l-4.444 6z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.747 14.043A6 6 0 1114.811 7.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgThunderNight;
