import React, { SVGProps } from 'react';

const SvgSocketEu = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 3.055V5a1 1 0 002 0V3.055a9.001 9.001 0 010 17.89V19a1 1 0 00-2 0v1.945a9.001 9.001 0 010-17.89zM8.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSocketEu;
