import React, { SVGProps } from 'react';

const SvgBatteryFull = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={2} y={7} width={17} height={10} rx={2} />
				<path
					d='M20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBatteryFull;
