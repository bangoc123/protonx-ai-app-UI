import React, { SVGProps } from 'react';

const SvgTie = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.112 7.006A1.01 1.01 0 0014 7h-4a1.01 1.01 0 00-.112.006l-2.54-2.448a1 1 0 01-.028-1.412L8.42 2h7.16l1.1 1.146a1 1 0 01-.028 1.412l-2.54 2.448z'
					fill='currentColor'
				/>
				<path
					d='M13.764 9l1.721 9.15a1 1 0 01-.26.877l-2.503 2.608a1 1 0 01-1.444 0l-2.502-2.608a1 1 0 01-.261-.878L10.236 9h3.528z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgTie;
