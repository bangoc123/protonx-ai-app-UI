import React, { SVGProps } from 'react';

const SvgFlatten = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' cx={9} cy={15} r={6} />
				<path
					d='M8.801 7.002a6 6 0 118.196 8.196 8 8 0 00-8.196-8.196z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFlatten;
