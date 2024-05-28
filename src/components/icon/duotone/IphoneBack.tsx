import React, { SVGProps } from 'react';

const SvgIphoneBack = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 100 2h2a1 1 0 000-2H8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIphoneBack;
