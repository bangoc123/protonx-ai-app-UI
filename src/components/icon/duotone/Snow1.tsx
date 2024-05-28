import React, { SVGProps } from 'react';

const SvgSnow1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.747 14.043A6 6 0 1114.811 7.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
				<path
					d='M8.906 16.12a1 1 0 11-.518 1.931 1 1 0 01.518-1.932zm8 0a1 1 0 11-.518 1.931 1 1 0 01.518-1.932zm-4 0a1 1 0 11-.518 1.931 1 1 0 01.518-1.932zm2 3a1 1 0 11-.518 1.931 1 1 0 01.518-1.932zm-4 0a1 1 0 11-.518 1.931 1 1 0 01.518-1.932z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSnow1;
