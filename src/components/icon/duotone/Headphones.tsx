import React, { SVGProps } from 'react';

const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M19 16v-4a7 7 0 00-14 0v4h14zm2 0H3v-4a9 9 0 1118 0v4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 14h1a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2zm13 0h1a2 2 0 012 2v3a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgHeadphones;
