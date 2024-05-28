import React, { SVGProps } from 'react';

const SvgBatteryCharging = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 9v6h13V9H4zm0-2h13a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z'
					fill='currentColor'
				/>
				<path
					d='M10.356 14.055l1.384-1.73a.2.2 0 00-.156-.325H11v-1.84a.2.2 0 00-.366-.11l-1.427 2.14a.2.2 0 00.167.31H10v1.43a.2.2 0 00.356.125zM20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBatteryCharging;
