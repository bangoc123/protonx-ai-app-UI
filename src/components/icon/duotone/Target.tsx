import React, { SVGProps } from 'react';

const SvgTarget = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M19 11h2a1 1 0 010 2h-2a1 1 0 010-2zM3 11h2a1 1 0 010 2H3a1 1 0 010-2zm9-9a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<circle fill='currentColor' cx={12} cy={12} r={3} />
			</g>
		</svg>
	);
};

export default SvgTarget;
