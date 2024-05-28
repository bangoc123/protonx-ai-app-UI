import React, { SVGProps } from 'react';

const SvgBarcode = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13 5h2v15h-2V5zM5 5v15H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm11 0h2v15h-2V5zm4 0h1a1 1 0 011 1v13a1 1 0 01-1 1h-1V5z'
					fill='currentColor'
				/>
				<path fill='currentColor' opacity={0.3} d='M9 5v15H7V5z' />
			</g>
		</svg>
	);
};

export default SvgBarcode;
