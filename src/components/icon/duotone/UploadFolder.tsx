import React, { SVGProps } from 'react';

const SvgUploadFolder = (props: SVGProps<SVGSVGElement>) => {
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
					d='M8.543 14.492h2.123V16.5a.5.5 0 00.5.5h1.168a.5.5 0 00.5-.5v-2.008h2.123a.5.5 0 00.37-.836l-3.207-3.535a.5.5 0 00-.74 0l-3.207 3.535a.5.5 0 00.37.836z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUploadFolder;
