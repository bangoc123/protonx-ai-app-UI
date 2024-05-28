import React, { SVGProps } from 'react';

const SvgGameboy = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 16v-6a1 1 0 012 0v6h6a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h6z'
					fill='currentColor'
					opacity={0.3}
				/>
				<circle fill='currentColor' cx={12} cy={7} r={3} />
			</g>
		</svg>
	);
};

export default SvgGameboy;
