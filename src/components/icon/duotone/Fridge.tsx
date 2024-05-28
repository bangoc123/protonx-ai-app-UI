import React, { SVGProps } from 'react';

const SvgFridge = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7 10v6a1 1 0 002 0v-6h10v12a1 1 0 01-1 1H6a1 1 0 01-1-1V10h2zm0-2H5V2a1 1 0 011-1h12a1 1 0 011 1v6H9V5a1 1 0 10-2 0v3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFridge;
