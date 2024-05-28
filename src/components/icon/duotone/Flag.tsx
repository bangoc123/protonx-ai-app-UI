import React, { SVGProps } from 'react';

const SvgFlag = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 3H5v16.5a1.5 1.5 0 01-3 0v-15A1.5 1.5 0 013.5 3z'
					fill='currentColor'
				/>
				<path
					d='M7 3h12.755a1 1 0 01.743 1.669L17.5 8l2.998 3.331A1 1 0 0119.755 13H7V3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFlag;
