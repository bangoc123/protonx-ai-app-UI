import React, { SVGProps } from 'react';

const SvgShare1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.9 2a1 1 0 010 2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2a1 1 0 012 0v2a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h4.9z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.005 13.897c0-.762-.164-3.772 2.21-6.16 1.599-1.608 3.99-1.886 6.85-2.013V1.838a.75.75 0 011.254-.556l6.509 5.905a.75.75 0 01.005 1.106l-6.508 6.027a.75.75 0 01-1.26-.55V9.908c-1.816.05-3.11.165-4.284.539-1.685.536-2.989 2.052-3.912 4.55a.75.75 0 01-.703.49H7c0-.46.005-1.186.005-1.59z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgShare1;
