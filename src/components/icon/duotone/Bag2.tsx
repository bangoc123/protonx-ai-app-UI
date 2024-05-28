import React, { SVGProps } from 'react';

const SvgBag2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.943 4h12.114a1 1 0 01.998.941l.82 13.942A2 2 0 0117.88 21H6.12a2 2 0 01-1.996-2.117l.82-13.942A1 1 0 015.943 4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M7 7h2a3 3 0 006 0h2A5 5 0 017 7z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgBag2;
