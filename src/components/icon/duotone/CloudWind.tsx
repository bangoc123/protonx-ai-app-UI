import React, { SVGProps } from 'react';

const SvgCloudWind = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.747 11.043A6 6 0 1114.811 4.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
				<path
					d='M4 14v2h13.5a1.5 1.5 0 011.5 1.5v.5a1 1 0 01-2 0v-1h-2v1a3 3 0 006 0v-.5a3.5 3.5 0 00-3.5-3.5H4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4 17v2h6.5a1.5 1.5 0 011.5 1.5v.5a1 1 0 01-2 0v-1H8v1a3 3 0 006 0v-.5a3.5 3.5 0 00-3.5-3.5H4z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgCloudWind;
