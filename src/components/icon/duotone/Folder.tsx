import React, { SVGProps } from 'react';

const SvgFolder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 20h17a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0020.5 7H11L8.44 4.44A1.5 1.5 0 007.378 4H3.5A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFolder;
