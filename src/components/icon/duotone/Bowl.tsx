import React, { SVGProps } from 'react';

const SvgBowl = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 17h8v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M2 7h20v1c0 5.523-4.477 10-10 10S2 13.523 2 8V7zm15.58 2.606c-.909 2.123-2.247 3.61-4.027 4.5a1 1 0 00.894 1.788c2.22-1.11 3.882-2.956 4.972-5.5a1 1 0 10-1.838-.788z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBowl;
