import React, { SVGProps } from 'react';

const SvgLadle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M23.374 7.61a1 1 0 010 1.415L17.01 15.39a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l6.364-6.364a1 1 0 011.414 0l1.414 1.414z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.232 18.925l3.536-3.536 1.414 1.414-3.536 3.536-.018-.019c-2.194 1.771-5.716 1.356-8.113-1.042-2.398-2.397-2.498-5.604-.692-7.762l7.41 7.409z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLadle;
