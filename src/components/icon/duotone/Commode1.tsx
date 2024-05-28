import React, { SVGProps } from 'react';

const SvgCommode1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.5 4h13A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 9.5v-4A1.5 1.5 0 015.5 4zM11 6a1 1 0 000 2h2a1 1 0 000-2h-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.5 13h13a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm5.5 2a1 1 0 000 2h2a1 1 0 000-2h-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCommode1;
