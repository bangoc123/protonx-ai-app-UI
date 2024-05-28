import React, { SVGProps } from 'react';

const SvgBox3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M20.406 6.736A1 1 0 0121 7.65v8.762a1 1 0 01-.514.874l-8 4.444a1 1 0 01-.972 0l-8-4.444A1 1 0 013 16.412V7.65a1 1 0 01.594-.914l8-3.555a1 1 0 01.812 0l8 3.555z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					fill='currentColor'
					d='M14.967 4.224L7.6 8.317v4.589l2 1V9.494l7.655-4.253z'
				/>
			</g>
		</svg>
	);
};

export default SvgBox3;
