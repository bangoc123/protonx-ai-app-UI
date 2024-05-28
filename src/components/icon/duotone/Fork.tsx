import React, { SVGProps } from 'react';

const SvgFork = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9.379 13.914l.707.707a1 1 0 010 1.415l-4.95 4.95a1 1 0 01-1.414 0l-.707-.708a1 1 0 010-1.414l4.95-4.95a1 1 0 011.414 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M15.56 2.99l-3.313 4.188a.786.786 0 001.105 1.105l4.189-3.314.99.99-3.314 4.19a.786.786 0 001.105 1.104l4.188-3.314.708.707-4.243 4.243a4 4 0 01-5.657 0l-.707-.707a4 4 0 010-5.657l4.243-4.243.707.708z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFork;
