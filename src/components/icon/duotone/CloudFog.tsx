import React, { SVGProps } from 'react';

const SvgCloudFog = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.747 14.043A6 6 0 1114.811 7.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
				<path
					d='M4.5 17h16a.5.5 0 110 1h-16a.5.5 0 110-1zm0 2h4a.5.5 0 110 1h-4a.5.5 0 110-1zm12 2h4a.5.5 0 110 1h-4a.5.5 0 110-1zm-5-2h9a.5.5 0 110 1h-9a.5.5 0 110-1zm-7 2h9a.5.5 0 110 1h-9a.5.5 0 110-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgCloudFog;
