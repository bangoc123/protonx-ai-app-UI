import React, { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.738 6.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCheck;
