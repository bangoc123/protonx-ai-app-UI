import React, { SVGProps } from 'react';

const SvgMarker2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9.828 16.657a7 7 0 114.343 0L12 21l-2.172-4.343zM12 12a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMarker2;
