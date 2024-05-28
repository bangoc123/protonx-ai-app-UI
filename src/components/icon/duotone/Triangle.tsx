import React, { SVGProps } from 'react';

const SvgTriangle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.954 19h16.092a.5.5 0 00.41-.785L12.412 6.594a.5.5 0 00-.822 0L3.543 18.215a.5.5 0 00.411.785z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTriangle;
