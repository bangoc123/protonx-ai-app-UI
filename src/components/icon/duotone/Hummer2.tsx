import React, { SVGProps } from 'react';

const SvgHummer2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.515 18.657l9.9-9.9a1 1 0 011.413 0l1.415 1.415a1 1 0 010 1.414l-9.9 9.9a1 1 0 01-1.414 0L3.515 20.07a1 1 0 010-1.414z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.879 6.636l3.535-3.535a1 1 0 011.414 0l7.071 7.07a1 1 0 010 1.415l-3.535 3.535a1 1 0 01-1.414 0l-7.071-7.07a1 1 0 010-1.415z'
					fill='currentColor'
				/>
				<path
					d='M17.303 4.868l.707-.707a.5.5 0 01.708 0l2.12 2.121a.5.5 0 010 .708l-.706.707a.5.5 0 01-.707 0l-2.122-2.122a.5.5 0 010-.707z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgHummer2;
