import React, { SVGProps } from 'react';

const SvgRectangle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={4} y={4} width={16} height={16} rx={2} />
			</g>
		</svg>
	);
};

export default SvgRectangle;
