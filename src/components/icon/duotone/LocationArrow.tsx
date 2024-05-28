import React, { SVGProps } from 'react';

const SvgLocationArrow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M1.865 8.432l17.823-5.941A.8.8 0 0120.7 3.503L14.76 21.326a.8.8 0 01-1.48.094l-3.74-7.768-7.768-3.74a.8.8 0 01.094-1.48z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLocationArrow;
