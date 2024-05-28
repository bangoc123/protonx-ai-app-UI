import React, { SVGProps } from 'react';

const SvgAndroid = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.5 4v15h9V4h-9zm.214-2h8.572C17.232 2 18 2.895 18 4v16c0 1.105-.768 2-1.714 2H7.714C6.768 22 6 21.105 6 20V4c0-1.105.768-2 1.714-2z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M7.5 4v15h9V4z' />
			</g>
		</svg>
	);
};

export default SvgAndroid;
