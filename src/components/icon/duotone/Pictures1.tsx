import React, { SVGProps } from 'react';

const SvgPictures1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path fill='currentColor' opacity={0.3} d='M4 19l6-8 6 8z' />
				<path fill='currentColor' d='M11 19l4-5 4 5z' />
				<path
					d='M18 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPictures1;
