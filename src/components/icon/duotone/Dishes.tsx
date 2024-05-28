import React, { SVGProps } from 'react';

const SvgDishes = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 16h18a4 4 0 01-4 4H7a4 4 0 01-4-4zm0-5h18v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z'
					fill='currentColor'
				/>
				<path
					d='M3 5h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgDishes;
