import React, { SVGProps } from 'react';

const SvgMarker1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 10.5C5 6 8 3 12.5 3S20 6.75 20 10.5c0 2.333-2.176 5.536-6.529 9.61a1.5 1.5 0 01-1.994.05C7.16 16.507 5 13.287 5 10.5zm7.5 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMarker1;
