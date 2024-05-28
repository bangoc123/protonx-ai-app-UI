import React, { SVGProps } from 'react';

const SvgPenToolVector = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 3v8c0 .086.01.17.031.25a2 2 0 101.938 0c.02-.08.031-.164.031-.25V3l4.793 9.585a1 1 0 01.024.841l-2.687 6.271a.5.5 0 01-.46.303H9.33a.5.5 0 01-.46-.303l-2.687-6.27a1 1 0 01.024-.842L11 3z'
					fill='currentColor'
				/>
				<path
					d='M10 21h4a1 1 0 011 1v1H9v-1a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPenToolVector;
