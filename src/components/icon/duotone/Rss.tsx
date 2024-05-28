import React, { SVGProps } from 'react';

const SvgRss = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' cx={6} cy={18} r={3} />
				<path
					d='M16.5 21h-3c0-5.799-4.701-10.5-10.5-10.5v-3c7.456 0 13.5 6.044 13.5 13.5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M22.5 21h-3c0-8.837-7.663-16.5-16.5-16.5v-3c10.493 0 19.5 9.007 19.5 19.5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRss;
