import React, { SVGProps } from 'react';

const SvgBread = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21 10.663V19a2 2 0 01-2 2H9a2 2 0 01-2-2v-8.337A3.5 3.5 0 018.5 4h11a3.5 3.5 0 011.5 6.663z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M17 10.663V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.337A3.5 3.5 0 014.5 4h11a3.5 3.5 0 011.5 6.663z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBread;
