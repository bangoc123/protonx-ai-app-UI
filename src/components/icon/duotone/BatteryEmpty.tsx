import React, { SVGProps } from 'react';

const SvgBatteryEmpty = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 9v6h13V9H4zm0-2h13a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z'
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

export default SvgBatteryEmpty;
