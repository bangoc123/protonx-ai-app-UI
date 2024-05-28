import React, { SVGProps } from 'react';

const SvgDoubleCheck = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M20.738 5.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M15.738 6.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDoubleCheck;
