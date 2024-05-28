import React, { SVGProps } from 'react';

const SvgArrowToLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='matrix(0 -1 -1 0 26 26)'
					x={13}
					y={5}
					width={2}
					height={14}
					rx={1}
				/>
				<rect fill='currentColor' opacity={0.3} x={3} y={3} width={2} height={18} rx={1} />
				<path
					d='M14.707 17.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 01-.03-1.383l5.5-6a1 1 0 111.474 1.352L9.384 11.97l5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArrowToLeft;
