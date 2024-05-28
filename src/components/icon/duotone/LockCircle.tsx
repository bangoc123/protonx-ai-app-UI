import React, { SVGProps } from 'react';

const SvgLockCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={10} />
				<path
					d='M14.5 11a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3a1 1 0 011-1v-.5a2.5 2.5 0 115 0v.5zM12 9a1.5 1.5 0 00-1.5 1.5v.5h3v-.5A1.5 1.5 0 0012 9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLockCircle;
