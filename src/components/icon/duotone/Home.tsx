import React, { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.957 8.415L11.48 3.82a1 1 0 011.042 0l7.522 4.596A2 2 0 0121 10.122V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.878a2 2 0 01.957-1.707zM10 13a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgHome;
