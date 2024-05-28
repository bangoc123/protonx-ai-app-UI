import React, { SVGProps } from 'react';

const SvgImac = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 5v11h14V5H5zm0-2h14c1.42 0 2 .716 2 1.6v12.8c0 .884-.58 1.6-2 1.6H5c-1.42 0-2-.716-2-1.6V4.6C3 3.716 3.58 3 5 3zm7 15a.5.5 0 100-1 .5.5 0 000 1z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M5 5v11h14V5z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={10}
					y={20}
					width={4}
					height={1}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgImac;
