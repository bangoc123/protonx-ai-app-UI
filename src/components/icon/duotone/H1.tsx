import React, { SVGProps } from 'react';

const SvgH1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					fill='currentColor'
					d='M4.634 19V5.51h1.729v5.757h7.448V5.51h1.729V19h-1.729v-6.061H6.363V19z'
				/>
				<path fill='currentColor' opacity={0.3} d='M18.998 19V6.992l1.634-1.634V19z' />
			</g>
		</svg>
	);
};

export default SvgH1;
