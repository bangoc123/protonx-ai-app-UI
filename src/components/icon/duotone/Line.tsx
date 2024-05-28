import React, { SVGProps } from 'react';

const SvgLine = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13 9V6c-3.954 1.488-6.211 2.994-8 7h3c.743-.8 1.989-3 5-4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<circle fill='currentColor' cx={18} cy={7.5} r={3} />
				<circle fill='currentColor' cx={6} cy={18} r={3} />
			</g>
		</svg>
	);
};

export default SvgLine;
