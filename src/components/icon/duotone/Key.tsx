import React, { SVGProps } from 'react';

const SvgKey = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					fill='currentColor'
					opacity={0.3}
					d='M11.366 10.823L5 17v3h3v-2h1.942v-2H12l2.184-2.359z'
				/>
				<path
					d='M11.743 13.228a6 6 0 118.485-8.485 6 6 0 01-8.485 8.485zm4.318-4.046a1.5 1.5 0 102.121-2.121 1.5 1.5 0 00-2.121 2.121z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgKey;
