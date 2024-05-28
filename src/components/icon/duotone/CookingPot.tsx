import React, { SVGProps } from 'react';

const SvgCookingPot = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10 6V5a1 1 0 011-1h2a1 1 0 011 1v1h.384c1.823 0 3.63.34 5.33 1l.088.034A.5.5 0 0119.62 8H4.38a.5.5 0 01-.182-.966L4.286 7c1.7-.66 3.507-1 5.33-1H10zm10 5h2a1 1 0 010 2h-2a1 1 0 010-2zM2 11h2a1 1 0 010 2H2a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 9h14a1 1 0 011 1v7a4 4 0 01-4 4H8a4 4 0 01-4-4v-7a1 1 0 011-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCookingPot;
