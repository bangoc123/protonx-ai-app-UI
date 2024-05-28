import React, { SVGProps } from 'react';

const SvgWarning1Circle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={10} />
				<rect fill='currentColor' x={11} y={7} width={2} height={8} rx={1} />
				<rect fill='currentColor' x={11} y={16} width={2} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgWarning1Circle;
