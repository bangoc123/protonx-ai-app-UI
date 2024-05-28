import React, { SVGProps } from 'react';

const SvgBulletList = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.5 5h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3zm0 5h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3zm0 5h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3z'
					fill='currentColor'
				/>
				<path
					d='M5.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBulletList;
