import React, { SVGProps } from 'react';

const SvgIphoneXBack = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v2a1 1 0 102 0V4a1 1 0 00-1-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIphoneXBack;
