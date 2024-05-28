import React, { SVGProps } from 'react';

const SvgLaptopMacbook = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M5 6h14a1 1 0 011 1v10H4V7a1 1 0 011-1z' fill='currentColor' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={1}
					y={18}
					width={22}
					height={1}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgLaptopMacbook;
