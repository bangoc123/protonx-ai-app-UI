import React, { SVGProps } from 'react';

const SvgAngleGrinder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18.778 12.5A5.5 5.5 0 1111 4.722a5.5 5.5 0 017.778 7.778zm-2.475-2.475a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zm-.707-.707a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-45 9.232 14.975)'
					x={1.232}
					y={11.975}
					width={16}
					height={6}
					rx={3}
				/>
				<path
					d='M20.44 13.455c-3.316 2.332-7.581 2.318-10.147-.248s-2.58-6.831-.248-10.147L20.44 13.455z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAngleGrinder;
