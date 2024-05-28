import React, { SVGProps } from 'react';

const SvgBackspace = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.42 20H21a2 2 0 002-2V6a2 2 0 00-2-2H8.42a1 1 0 00-.704.29l-7.063 7a1 1 0 000 1.42l7.063 7a1 1 0 00.704.29z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.586 12l-1.414-1.414a1 1 0 111.414-1.414L14 10.586l1.414-1.414a1 1 0 111.414 1.414L15.414 12l1.414 1.414a1 1 0 11-1.414 1.414L14 13.414l-1.414 1.414a1 1 0 11-1.414-1.414L12.586 12z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBackspace;
