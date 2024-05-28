import React, { SVGProps } from 'react';

const SvgCommode2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.5 2h13A1.5 1.5 0 0120 3.5v3A1.5 1.5 0 0118.5 8h-13A1.5 1.5 0 014 6.5v-3A1.5 1.5 0 015.5 2zM11 4a1 1 0 000 2h2a1 1 0 000-2h-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.5 9h13a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 13.5v-3A1.5 1.5 0 015.5 9zm5.5 2a1 1 0 000 2h2a1 1 0 000-2h-2zm-5.5 5h13a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-3A1.5 1.5 0 015.5 16zm5.5 2a1 1 0 000 2h2a1 1 0 000-2h-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCommode2;
