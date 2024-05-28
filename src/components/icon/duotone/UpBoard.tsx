import React, { SVGProps } from 'react';

const SvgUpBoard = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 3h6A1.5 1.5 0 0111 4.5v14A1.5 1.5 0 019.5 20h-6A1.5 1.5 0 012 18.5v-14A1.5 1.5 0 013.5 3zM9 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20.5 3h-6A1.5 1.5 0 0013 4.5v14a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-14A1.5 1.5 0 0020.5 3zM15 9a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUpBoard;
