import React, { SVGProps } from 'react';

const SvgLadder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7 5h10a1 1 0 010 2H7a1 1 0 110-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.5 2A1.5 1.5 0 017 3.5v17a1.5 1.5 0 01-3 0v-17A1.5 1.5 0 015.5 2zm13 0A1.5 1.5 0 0120 3.5v17a1.5 1.5 0 01-3 0v-17A1.5 1.5 0 0118.5 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLadder;
