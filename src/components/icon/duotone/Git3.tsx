import React, { SVGProps } from 'react';

const SvgGit3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7 11h8a2 2 0 002-2V8h2v1a4 4 0 01-4 4H7v2a1 1 0 01-2 0V9a1 1 0 112 0v2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM18 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM6 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGit3;
