import React, { SVGProps } from 'react';

const SvgDvd = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={9} />
				<path
					d='M11.158 15.873l3.993-3.482a.5.5 0 000-.753L11.16 8.134a.5.5 0 00-.83.376v6.986a.5.5 0 00.83.377z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDvd;
