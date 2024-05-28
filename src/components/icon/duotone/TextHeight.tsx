import React, { SVGProps } from 'react';

const SvgTextHeight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.5 8v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V8H2a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1H8.5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20 16.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L18 16.586V7.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L20 7.414v9.172z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTextHeight;
