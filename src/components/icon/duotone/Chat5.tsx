import React, { SVGProps } from 'react';

const SvgChat5 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M22 15.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18H6a3 3 0 01-3-3V6a3 3 0 013-3h13a3 3 0 013 3v9.01z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgChat5;
