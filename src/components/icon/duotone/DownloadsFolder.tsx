import React, { SVGProps } from 'react';

const SvgDownloadsFolder = (props: SVGProps<SVGSVGElement>) => {
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
					d='M14.888 12.83H12.93v-2.007a.5.5 0 00-.5-.5h-1.023a.5.5 0 00-.5.5v2.008H8.95a.5.5 0 00-.381.823l2.968 3.505a.5.5 0 00.763 0l2.968-3.505a.5.5 0 00-.381-.823z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDownloadsFolder;
