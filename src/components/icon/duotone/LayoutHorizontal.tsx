import React, { SVGProps } from 'react';

const SvgLayoutHorizontal = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={4}
					y={5}
					width={16}
					height={6}
					rx={1.5}
				/>
				<rect fill='currentColor' x={4} y={13} width={16} height={6} rx={1.5} />
			</g>
		</svg>
	);
};

export default SvgLayoutHorizontal;
