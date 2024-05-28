import React, { SVGProps } from 'react';

const SvgHardDrive = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2 13h20v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5zm16.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
				/>
				<path
					d='M5.793 8h12.414a1 1 0 01.839.455L22 13H2l2.954-4.545A1 1 0 015.793 8z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgHardDrive;
