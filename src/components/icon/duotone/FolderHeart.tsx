import React, { SVGProps } from 'react';

const SvgFolderHeart = (props: SVGProps<SVGSVGElement>) => {
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
					d='M14.35 10.5c-.805 0-1.746.912-2.25 1.5-.504-.588-1.445-1.5-2.25-1.5-1.425 0-2.25 1.111-2.25 2.525 0 1.567 1.5 3.225 4.5 4.975 3-1.75 4.5-3.375 4.5-4.875 0-1.414-.826-2.625-2.25-2.625z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFolderHeart;
