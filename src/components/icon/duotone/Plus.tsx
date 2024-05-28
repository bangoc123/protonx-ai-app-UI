import React, { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='currentColor' fillRule='evenodd'>
				<rect x={4} y={11} width={16} height={2} rx={1} />
				<rect
					opacity={0.3}
					transform='rotate(90 12 12)'
					x={4}
					y={11}
					width={16}
					height={2}
					rx={1}
				/>
			</g>
		</svg>
	);
};

export default SvgPlus;
