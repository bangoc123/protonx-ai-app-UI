import React, { SVGProps } from 'react';

const SvgOther1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' cx={12} cy={5} r={2} />
				<circle fill='currentColor' cx={12} cy={12} r={2} />
				<circle fill='currentColor' cx={12} cy={19} r={2} />
			</g>
		</svg>
	);
};

export default SvgOther1;
