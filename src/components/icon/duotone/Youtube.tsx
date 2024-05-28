import React, { SVGProps } from 'react';

const SvgYoutube = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.223 4h15.614a3 3 0 012.987 2.726A46.12 46.12 0 0123 10.923c0 1.782-.08 3.564-.241 5.346A3 3 0 0119.771 19H4.223a3 3 0 01-2.987-2.72A51.277 51.277 0 011 11.5c0-1.51.079-3.104.236-4.78A3 3 0 014.223 4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11.182 14.805l4.404-3.01a.5.5 0 000-.824l-4.403-3.03a.5.5 0 00-.783.413v6.039a.5.5 0 00.782.412z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgYoutube;
