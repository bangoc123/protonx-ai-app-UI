import React, { SVGProps } from 'react';

const SvgBox2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 9.675l6.88 3.972a.89.89 0 00.231.093v7.704l-6.62-3.918a1 1 0 01-.491-.86V9.675zm16-.106v7.097a1 1 0 01-.49.86l-6.621 3.918v-7.771a.903.903 0 00.048-.026L20 9.569z'
					fill='currentColor'
				/>
				<path
					d='M4.216 7.747a.999.999 0 01.314-.262l7-3.728a1 1 0 01.94 0l7 3.728c.095.05.18.116.253.191l-7.675 4.431a.893.893 0 00-.14.1.893.893 0 00-.139-.1l-7.553-4.36z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBox2;
