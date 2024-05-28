import React, { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2 13c0-.5.5-1 1-1s1 .5 1 1v5a2 2 0 002 2h12a2 2 0 002-2v-5a1 1 0 012 0v5a4 4 0 01-4 4H6a4 4 0 01-4-4v-5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-180 12 8)'
					x={11}
					y={1}
					width={2}
					height={14}
					rx={1}
				/>
				<path
					d='M16.293 9.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.376.036l-5-4.5a1 1 0 111.338-1.486l4.295 3.865 4.329-4.33z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDownload;
