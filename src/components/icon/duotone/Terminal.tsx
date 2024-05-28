import React, { SVGProps } from 'react';

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.293 6.707a1 1 0 111.414-1.414l6 6a1 1 0 01.03 1.383l-5.5 6a1 1 0 11-1.474-1.352l4.853-5.294-5.323-5.323z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					x={12}
					y={17}
					width={10}
					height={2}
					rx={1}
				/>
			</g>
		</svg>
	);
};

export default SvgTerminal;
