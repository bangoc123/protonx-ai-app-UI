import React, { SVGProps } from 'react';

const SvgItalic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' d='M10 19l3-14h2l-3 14z' />
			</g>
		</svg>
	);
};

export default SvgItalic;
