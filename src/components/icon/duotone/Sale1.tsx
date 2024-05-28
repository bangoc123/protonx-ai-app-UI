import React, { SVGProps } from 'react';

const SvgSale1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M16.032 5.687L5.758 15.946a1.629 1.629 0 00-.001 2.304 1.629 1.629 0 002.304-.001L18.32 7.975a1.617 1.617 0 00-2.287-2.287z'
					fill='currentColor'
				/>
				<path
					d='M9.857 6.929a2.93 2.93 0 11-5.856-.001 2.93 2.93 0 015.856 0zM20 17.07a2.93 2.93 0 11-5.856-.001A2.93 2.93 0 0120 17.07z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSale1;
