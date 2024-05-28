import React, { SVGProps } from 'react';

const SvgColor = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a7 7 0 007-7c0-2.577-2.333-5.91-7-10-4.667 4.09-7 7.423-7 10a7 7 0 007 7z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgColor;
