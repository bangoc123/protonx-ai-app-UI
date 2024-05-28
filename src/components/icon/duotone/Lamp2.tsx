import React, { SVGProps } from 'react';

const SvgLamp2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 2a1 1 0 011 1v8a1 1 0 01-2 0V3a1 1 0 011-1zM8.126 19h7.748a4.002 4.002 0 01-7.748 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M12 8a9 9 0 019 9H3a9 9 0 019-9z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgLamp2;
