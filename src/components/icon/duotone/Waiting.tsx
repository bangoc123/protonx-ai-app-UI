import React, { SVGProps } from 'react';

const SvgWaiting = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M19.5 10.5H21a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.629l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 11-2.121-2.12zm0 12.311a1.5 1.5 0 112.122-2.121l1.06 1.06a1.5 1.5 0 01-2.12 2.122l-1.061-1.061zM3 10.5h1.5a1.5 1.5 0 010 3H3a1.5 1.5 0 010-3zm9-9A1.5 1.5 0 0113.5 3v1.5a1.5 1.5 0 01-3 0V3A1.5 1.5 0 0112 1.5zM12 18a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-3 0v-1.5A1.5 1.5 0 0112 18zM4.81 4.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L4.81 6.932a1.5 1.5 0 010-2.121zm0 14.433a1.5 1.5 0 010-2.122l1.061-1.06a1.5 1.5 0 112.122 2.121l-1.061 1.06a1.5 1.5 0 01-2.121 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgWaiting;
