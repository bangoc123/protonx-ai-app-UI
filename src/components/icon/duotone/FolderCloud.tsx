import React, { SVGProps } from 'react';

const SvgFolderCloud = (props: SVGProps<SVGSVGElement>) => {
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
					d='M8.637 16.463A3.5 3.5 0 1113.965 13H15a2 2 0 110 4h-5a1.993 1.993 0 01-1.363-.537z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFolderCloud;
