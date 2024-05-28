import React, { SVGProps } from 'react';

const SvgWood1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 19a7 7 0 007-7c0-2.577-2.333-5.91-7-10-4.667 4.09-7 7.423-7 10a7 7 0 007 7z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect fill='currentColor' x={11} y={11} width={2} height={11} rx={1} />
			</g>
		</svg>
	);
};

export default SvgWood1;
