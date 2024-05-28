import React, { SVGProps } from 'react';

const SvgServer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zM7 6a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 9h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zm-4 2a1 1 0 100-2 1 1 0 000 2zM5 16h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zm-4 2a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgServer;
