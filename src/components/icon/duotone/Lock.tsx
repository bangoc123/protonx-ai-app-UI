import React, { SVGProps } from 'react';

const SvgLock = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<defs>
				<path id='lock_svg__a' d='M0 0h24v24H0z' />
			</defs>
			<g fill='none' fillRule='evenodd'>
				<path
					d='M7 10V8a5 5 0 1110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h1zm5-5a3 3 0 00-3 3v2h6V8a3 3 0 00-3-3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLock;
