import React, { SVGProps } from 'react';

const SvgCap3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13 19v-3.1A5.002 5.002 0 0012 6a5 5 0 00-1 9.9V19H4v-7a8 8 0 1116 0v7h-7z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={12} cy={11} r={2} />
			</g>
		</svg>
	);
};

export default SvgCap3;
