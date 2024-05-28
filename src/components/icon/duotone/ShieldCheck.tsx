import React, { SVGProps } from 'react';

const SvgShieldCheck = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11.175 14.75a.946.946 0 01-.67-.287l-1.917-1.917a.926.926 0 010-1.342c.383-.383 1.006-.383 1.341 0l1.246 1.246 3.163-3.162a.926.926 0 011.341 0 .926.926 0 010 1.341l-3.833 3.834a.946.946 0 01-.671.287z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgShieldCheck;
