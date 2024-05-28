import React, { SVGProps } from 'react';

const SvgDisplay1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 20v-3a1 1 0 012 0v3h2.5a.5.5 0 110 1h-7a.5.5 0 110-1H11z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M3 5h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.5 3a.5.5 0 000 1h9a.5.5 0 100-1h-9zm0 2a.5.5 0 100 1h3a.5.5 0 100-1h-3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDisplay1;
