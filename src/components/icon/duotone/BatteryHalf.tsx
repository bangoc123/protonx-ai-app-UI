import React, { SVGProps } from 'react';

const SvgBatteryHalf = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 9v6h6V9h-6zM4 7h13a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z'
					fill='currentColor'
				/>
				<path
					d='M20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBatteryHalf;
