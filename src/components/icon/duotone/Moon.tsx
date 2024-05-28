import React, { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M12.07 4a8 8 0 006.86 12 8 8 0 11-6.86-12z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgMoon;
