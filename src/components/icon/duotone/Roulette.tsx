import React, { SVGProps } from 'react';

const SvgRoulette = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M22 8a1 1 0 01-1 1h-2v6a6 6 0 01-6 6H5a2 2 0 01-2-2v-8a6 6 0 016-6h8a2 2 0 012 2h2V6h1v2zm-11 9a4 4 0 100-8 4 4 0 000 8z'
					fill='currentColor'
				/>
				<path
					d='M12 3h3a1 1 0 011 1v1h-5V4a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRoulette;
