import React, { SVGProps } from 'react';

const SvgAlignJustify = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 5h14a1 1 0 010 2H5a1 1 0 110-2zm0 8h14a1 1 0 010 2H5a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 9h14a1 1 0 010 2H5a1 1 0 010-2zm0 8h14a1 1 0 010 2H5a1 1 0 010-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAlignJustify;
