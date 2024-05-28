import React, { SVGProps } from 'react';

const SvgCuttingBoard = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.379 15.121a2.5 2.5 0 010 3.536l-2.122 2.121a2.5 2.5 0 01-3.535-3.535l2.121-2.122a2.5 2.5 0 013.536 0zm-4.561 4.632a1.25 1.25 0 101.768-1.768 1.25 1.25 0 00-1.768 1.768z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M14.39 1.333l7.777 7.778a2 2 0 010 2.828l-9.192 9.193a2 2 0 01-2.829 0l-7.778-7.778a2 2 0 010-2.829l9.193-9.192a2 2 0 012.828 0z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCuttingBoard;
