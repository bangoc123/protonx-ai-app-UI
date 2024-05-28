import React, { SVGProps } from 'react';

const SvgBagChair = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 2c2.298 0 4.4 1.298 5.427 3.354L20.75 12a6.91 6.91 0 01-6.18 10H9.43a6.91 6.91 0 01-6.18-10l3.323-6.646A6.068 6.068 0 0112 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.437 16.5L7.562 15c1.513 1.135 2.987 1.688 4.438 1.688 1.45 0 2.924-.553 4.437-1.688l1.125 1.5c-1.82 1.365-3.68 2.063-5.562 2.063-1.883 0-3.742-.698-5.563-2.063z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBagChair;
