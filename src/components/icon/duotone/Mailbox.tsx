import React, { SVGProps } from 'react';

const SvgMailbox = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 6h12.5a1.5 1.5 0 010 3H8v10.5a1.5 1.5 0 01-3 0V9H3.5a1.5 1.5 0 010-3H5V4.5a1.5 1.5 0 013 0V6z'
					fill='currentColor'
				/>
				<path
					d='M10 11h10.5a1.5 1.5 0 011.5 1.5V15a4 4 0 01-4 4h-6.5a1.5 1.5 0 01-1.5-1.5V11zm10 1a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgMailbox;
