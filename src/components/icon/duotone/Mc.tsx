import React, { SVGProps } from 'react';

const SvgMc = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.823 8.37l1.91 1.453a3.6 3.6 0 11.225 4.622l-1.762 1.63a6 6 0 10-.374-7.706z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M8.4 18a6 6 0 110-12 6 6 0 010 12z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgMc;
