import React, { SVGProps } from 'react';

const SvgTwoBottles = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 12H2v-1a3 3 0 013-3h3a3 3 0 013 3v1zm0 2v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6h9z'
					fill='currentColor'
				/>
				<path
					d='M22 12h-9v-1a3 3 0 013-3h3a3 3 0 013 3v1zm0 2v6a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6h9zM5 3h3a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zm11 0h3a1 1 0 011 1v1a1 1 0 01-1 1h-3a1 1 0 01-1-1V4a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgTwoBottles;
