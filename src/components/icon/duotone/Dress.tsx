import React, { SVGProps } from 'react';

const SvgDress = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.04 3C8.319 4.508 9.986 5.667 12 5.667c2.015 0 3.682-1.16 3.96-2.667h2.422a1 1 0 01.894 1.447l-3 6a1 1 0 01-.894.553H8.618a1 1 0 01-.894-.553l-3-6A1 1 0 015.618 3h2.423z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.354 12h5.292a2 2 0 011.857 1.257l2.948 7.372A1 1 0 0118.523 22H5.477a1 1 0 01-.928-1.371l2.948-7.372A2 2 0 019.354 12z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDress;
