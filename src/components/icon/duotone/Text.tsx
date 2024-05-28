import React, { SVGProps } from 'react';

const SvgText = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.5 8v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V8H7a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1h-3.5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgText;
