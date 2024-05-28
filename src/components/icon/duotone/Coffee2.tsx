import React, { SVGProps } from 'react';

const SvgCoffee2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 4h13a1 1 0 011 1v11a4 4 0 01-4 4h-7a4 4 0 01-4-4V5a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7 7v2H5a1 1 0 00-1 1v2a1 1 0 001 1h2v2H5a3 3 0 01-3-3v-2a3 3 0 013-3h2z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={18} y={7} width={2} height={8} rx={1} />
			</g>
		</svg>
	);
};

export default SvgCoffee2;
