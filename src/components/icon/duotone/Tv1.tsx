import React, { SVGProps } from 'react';

const SvgTv1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.5 6h15c1.38 0 2.5.97 2.5 2.167v8.666C22 18.03 20.88 19 19.5 19h-15C3.12 19 2 18.03 2 16.833V8.167C2 6.97 3.12 6 4.5 6zM4 8v9h16V8H4z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M4 8v9h16V8z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={7}
					y={20}
					width={10}
					height={1}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgTv1;
