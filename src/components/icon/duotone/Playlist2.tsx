import React, { SVGProps } from 'react';

const SvgPlaylist2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.5 5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 010-3zm-6 12h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3zm0-6h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4.829 9.408L7.703 6.9a.5.5 0 00.002-.753L4.83 3.624A.5.5 0 004 4v5.03a.5.5 0 00.829.378z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPlaylist2;
