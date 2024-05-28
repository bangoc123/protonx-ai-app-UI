import React, { SVGProps } from 'react';

const SvgDinner = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 8a2 2 0 110-4 2 2 0 010 4zM3 18h18a1 1 0 010 2H3a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M21 16a9 9 0 00-18 0h18z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgDinner;
