import React, { SVGProps } from 'react';

const SvgVertical = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 3a1 1 0 011 1v1a1 1 0 01-2 0V4a1 1 0 011-1zm0 5a1 1 0 011 1v1a1 1 0 01-2 0V9a1 1 0 011-1zm0 5a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm0 5a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1z'
					fill='currentColor'
				/>
				<path
					d='M21 9.04v5.92a.5.5 0 01-.812.39l-3.7-2.96a.5.5 0 010-.78l3.7-2.96a.5.5 0 01.812.39zM3 14.96V9.04a.5.5 0 01.812-.39l3.7 2.96a.5.5 0 010 .78l-3.7 2.96A.5.5 0 013 14.96z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgVertical;
