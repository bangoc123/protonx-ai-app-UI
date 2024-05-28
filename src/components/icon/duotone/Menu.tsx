import React, { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={4} y={5} width={16} height={3} rx={1.5} />
				<path
					d='M5.5 15h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3zm0-5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgMenu;
