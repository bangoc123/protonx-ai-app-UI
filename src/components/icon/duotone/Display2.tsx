import React, { SVGProps } from 'react';

const SvgDisplay2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M6 7v8h12V7z' />
				<path
					d='M11 19v-3a1 1 0 012 0v3h1.5a.5.5 0 110 1h-5a.5.5 0 110-1H11z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6 7v8h12V7H6zm0-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDisplay2;
