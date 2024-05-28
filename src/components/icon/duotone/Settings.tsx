import React, { SVGProps } from 'react';

const SvgSettings = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path opacity={0.2} d='M0 0h24v24H0z' />
				<path
					d='M4.5 7h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm9 8h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M17 11a3 3 0 110-6 3 3 0 010 6zM6 19a3 3 0 110-6 3 3 0 010 6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSettings;
