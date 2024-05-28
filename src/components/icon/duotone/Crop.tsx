import React, { SVGProps } from 'react';

const SvgCrop = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10 6h4.5C16.71 6 18 7.29 18 9.5V14h-2V9.5c0-1.105-.395-1.5-1.5-1.5H10V6zM8 6v2H4a1 1 0 110-2h4zm10 10v4a1 1 0 01-2 0v-4h2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20 16a1 1 0 110 2H9.5C7.29 18 6 16.71 6 14.5V4a1 1 0 012 0v10.5c0 1.105.395 1.5 1.5 1.5H20z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCrop;
