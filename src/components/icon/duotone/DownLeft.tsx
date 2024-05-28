import React, { SVGProps } from 'react';

const SvgDownLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-135 12.354 12.146)'
					x={11.354}
					y={5.146}
					width={2}
					height={14}
					rx={1}
				/>
				<path
					d='M15.89 16.096a1 1 0 110 2H7.403a1 1 0 01-1-.956l-.353-8.132A1 1 0 018.05 8.92l.312 7.175h7.528z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDownLeft;
