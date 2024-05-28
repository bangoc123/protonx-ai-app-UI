import React, { SVGProps } from 'react';

const SvgSettings3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={6} width={21} height={12} rx={6} />
				<circle fill='currentColor' cx={17} cy={12} r={4} />
			</g>
		</svg>
	);
};

export default SvgSettings3;
