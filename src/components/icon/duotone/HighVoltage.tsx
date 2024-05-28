import React, { SVGProps } from 'react';

const SvgHighVoltage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2.767 20a1 1 0 01-.867-1.499l9.233-16.05a1 1 0 011.734 0L22.1 18.5A1 1 0 0121.233 20H2.767zM11 18l4-6h-2.056V8L9 14h2v4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgHighVoltage;
