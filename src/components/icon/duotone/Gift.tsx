import React, { SVGProps } from 'react';

const SvgGift = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 6h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm1 5h5a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1zm9 0h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7a1 1 0 011-1z'
					fill='currentColor'
				/>
				<path
					d='M14.445 2.168a1 1 0 011.11 1.664L12 6.202l-3.555-2.37a1 1 0 011.11-1.664L12 3.798l2.445-1.63z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgGift;
