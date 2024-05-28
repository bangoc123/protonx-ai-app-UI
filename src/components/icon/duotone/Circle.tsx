import React, { SVGProps } from 'react';

const SvgCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' cx={12} cy={12} r={8} />
			</g>
		</svg>
	);
};

export default SvgCircle;
