import React, { SVGProps } from 'react';

const SvgSocketUs = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm4 3a1 1 0 00-1 1v3a1 1 0 002 0V8a1 1 0 00-1-1zm3 8a1.5 1.5 0 00-1.5 1.5V18h3v-1.5A1.5 1.5 0 0012 15zm3-8a1 1 0 00-1 1v3a1 1 0 002 0V8a1 1 0 00-1-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSocketUs;
