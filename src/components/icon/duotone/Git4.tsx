import React, { SVGProps } from 'react';

const SvgGit4 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
				<path
					d='M7 11.465V17a2 2 0 002 2h6v2H9a4 4 0 01-4-4V7h2v1a2 2 0 002 2h6v2H9a3.982 3.982 0 01-2-.535z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M18 22a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM18 13a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGit4;
