import React, { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 6h2a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V7a1 1 0 011-1zm6 0h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7a1 1 0 011-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPause;
