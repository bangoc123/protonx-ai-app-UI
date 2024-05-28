import React, { SVGProps } from 'react';

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<defs>
				<path id='unlock_svg__a' d='M0 0h24v24H0z' />
			</defs>
			<g fill='none' fillRule='evenodd'>
				<path
					d='M15.627 4.559L14.47 6.296A3 3 0 009 8l.001 2h9a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h1V8a5 5 0 018.627-3.441z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUnlock;
