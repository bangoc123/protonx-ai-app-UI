import React, { SVGProps } from 'react';

const SvgBurger = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15 15l.997 1.14a1 1 0 001.506 0L18.5 15H21a6.22 6.22 0 01-6.099 5H9.099A6.22 6.22 0 013 15h12zM21 9H3a6.22 6.22 0 016.099-5h5.802A6.22 6.22 0 0121 9z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={2} y={11} width={20} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBurger;
