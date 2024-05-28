import React, { SVGProps } from 'react';

const SvgIron = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M20.143 18L19 20H2c0-.679.048-1.347.142-2h18zM17 7h6v2h-6V7z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M21.286 16H2.58C4.3 10.217 9.658 5 16 5h1.5l5.5 8-1.714 3zM10.99 8.859c-.568.08-.99.567-.99 1.141a1 1 0 001 1h4.5a1.5 1.5 0 001.487-1.684 1.3 1.3 0 00-1.472-1.104l-4.525.647zM7 14a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIron;
