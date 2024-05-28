import React, { SVGProps } from 'react';

const SvgParagraph = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.754 19.864V12.54a4.732 4.732 0 01-4.725-4.725 4.732 4.732 0 014.725-4.725h5.565v16.774h-1.638V4.728h-2.268v15.136h-1.659z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgParagraph;
