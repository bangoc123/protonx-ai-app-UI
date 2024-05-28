import React, { SVGProps } from 'react';

const SvgLoading = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 4v2a6 6 0 11-5.24 3.075L5.014 8.1A8 8 0 1012 4z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgLoading;
