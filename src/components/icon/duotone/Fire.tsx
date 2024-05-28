import React, { SVGProps } from 'react';

const SvgFire = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14 7c-.333 3.333-1.333 5.117-3 5.35 0 0 1.5-5.85-.5-8.85 0 0-.212 3.214-2.355 7.072C7.14 12.38 6 13.599 6 16c0 3.429 3.511 5.2 6.006 5.2C14.5 21.2 18 20 18 15.8c0-1.727-1.333-4.66-4-8.8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFire;
