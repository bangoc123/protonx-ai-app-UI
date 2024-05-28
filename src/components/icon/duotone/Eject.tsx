import React, { SVGProps } from 'react';

const SvgEject = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18.901 12.915l-6.003-7.001a.5.5 0 00-.758-.001L6.1 12.914a.5.5 0 00.378.827h12.044a.5.5 0 00.38-.826z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='matrix(0 1 1 0 -5 5)'
					x={11}
					y={11}
					width={3}
					height={13}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgEject;
