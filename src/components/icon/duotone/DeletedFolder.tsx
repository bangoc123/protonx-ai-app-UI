import React, { SVGProps } from 'react';

const SvgDeletedFolder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.586 14l-1.414-1.414a1 1 0 111.414-1.414L12 12.586l1.414-1.414a1 1 0 111.414 1.414L13.414 14l1.414 1.414a1 1 0 11-1.414 1.414L12 15.414l-1.414 1.414a1 1 0 11-1.414-1.414L10.586 14z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDeletedFolder;
