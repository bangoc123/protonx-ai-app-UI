import React, { SVGProps } from 'react';

const SvgTextWidth = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.5 4v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V4H7a1 1 0 01-1-1V2a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1h-3.5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.414 20l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 111.414 1.414L6.414 18h11.172l-1.293-1.293a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L17.586 20H6.414z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTextWidth;
