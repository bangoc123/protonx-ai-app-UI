import React, { SVGProps } from 'react';

const SvgSave = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17 4H6c-1.209 0-2 .7-2 2v12c0 1.3.791 2 2 2h12c1.2 0 2-.7 2-2V7.207a.5.5 0 00-.146-.353L17 4zm0 7H7V4h10v7z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					x={12}
					y={4}
					width={3}
					height={5}
					rx={0.5}
				/>
			</g>
		</svg>
	);
};

export default SvgSave;
