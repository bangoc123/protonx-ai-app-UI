import React, { SVGProps } from 'react';

const SvgRainbow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.07 16a7.002 7.002 0 0113.86 0H16.9a5.002 5.002 0 00-9.8 0H5.07zm4.1 0a3.004 3.004 0 015.66 0H9.17z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12 6c5.738 0 10.45 4.393 10.955 10h-2.01a9.002 9.002 0 00-17.89 0h-2.01C1.55 10.393 6.262 6 12 6z'
					fill='currentColor'
				/>
				<path
					d='M12 6c5.738 0 10.45 4.393 10.955 10h-2.01a9.002 9.002 0 00-17.89 0h-2.01C1.55 10.393 6.262 6 12 6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRainbow;
