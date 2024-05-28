import React, { SVGProps } from 'react';

const SvgIceCream1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.202 22.05L16.5 13H7l4.298 9.05a.5.5 0 00.904 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M17 6h.5a2.5 2.5 0 110 5h-11a2.5 2.5 0 010-5H7a5 5 0 1110 0z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIceCream1;
