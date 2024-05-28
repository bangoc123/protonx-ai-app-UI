import React, { SVGProps } from 'react';

const SvgLayoutVertical = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={5} y={4} width={6} height={16} rx={1.5} />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={13}
					y={4}
					width={6}
					height={16}
					rx={1.5}
				/>
			</g>
		</svg>
	);
};

export default SvgLayoutVertical;
