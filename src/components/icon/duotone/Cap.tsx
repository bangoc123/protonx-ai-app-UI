import React, { SVGProps } from 'react';

const SvgCap = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={14}
					y={4.7}
					width={3}
					height={3}
					rx={1.5}
				/>
				<path
					d='M6.828 15a8.59 8.59 0 0116.468-3.821C21.766 11.659 21 12.6 21 14h2.98a8.718 8.718 0 01.01 1H24v1.5a.5.5 0 01-.5.5H1a1 1 0 010-2h5.828z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCap;
