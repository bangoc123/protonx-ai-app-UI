import React, { SVGProps } from 'react';

const SvgThunder1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					fill='currentColor'
					opacity={0.3}
					d='M10.089 24l4.444-6h-2.222v-4l-4.444 6h2.222z'
				/>
				<path
					d='M5.747 14.043A6 6 0 1114.811 7.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgThunder1;
