import React, { SVGProps } from 'react';

const SvgChat1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M5 15l-2 6.5 6.5-2z' />
				<path
					d='M13.5 21a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm-5-8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgChat1;
