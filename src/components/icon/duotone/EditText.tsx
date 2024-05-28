import React, { SVGProps } from 'react';

const SvgEditText = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 19h2v2H3v-2zm5 0h2v2H8v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.504 3.256h1.962L17.956 16h-2.592l-1.188-2.916H8.65L7.498 16H4.96l5.544-12.744zm2.88 7.884l-1.962-5.184-1.998 5.184h3.96z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgEditText;
