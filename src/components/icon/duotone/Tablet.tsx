import React, { SVGProps } from 'react';

const SvgTablet = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.5 4v16h11V4h-11zM7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M6.5 4v16h11V4z' />
			</g>
		</svg>
	);
};

export default SvgTablet;
