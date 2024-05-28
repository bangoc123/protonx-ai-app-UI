import React, { SVGProps } from 'react';

const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15.996 6H9a3 3 0 00-3 3v6.996c-1.298-.064-2-.825-2-2.178V6.182C4 4.768 4.768 4 6.182 4h7.636c1.353 0 2.114.702 2.178 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.182 8h7.636C19.232 8 20 8.768 20 10.182v7.636C20 19.232 19.232 20 17.818 20h-7.636C8.768 20 8 19.232 8 17.818v-7.636C8 8.768 8.768 8 10.182 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDuplicate;
