import React, { SVGProps } from 'react';

const SvgCloudyNight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M16.228 3.205a5 5 0 006.69 5.465 5 5 0 11-6.69-5.465z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.747 18.043a6 6 0 119.064-6.543h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCloudyNight;
