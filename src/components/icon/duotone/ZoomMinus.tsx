import React, { SVGProps } from 'react';

const SvgZoomMinus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					x={9}
					y={10.5}
					width={4}
					height={1}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgZoomMinus;
