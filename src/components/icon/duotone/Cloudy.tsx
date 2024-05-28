import React, { SVGProps } from 'react';

const SvgCloudy = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.747 15.043A6 6 0 1116.811 8.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M3.747 19.043a6 6 0 119.064-6.543h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCloudy;
