import React, { SVGProps } from 'react';

const SvgTicket = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.05 17.485l-1.45-1.45a1 1 0 010-1.414l3.536-3.535L7.55 12.5a1 1 0 101.414-1.414L7.55 9.672 14.621 2.6a1 1 0 011.415 0l1.45 1.45a2.5 2.5 0 003.464 3.464l1.45 1.45a1 1 0 010 1.414l-7.072 7.07-1.414-1.413A1 1 0 0012.5 17.45l1.414 1.414-3.535 3.535a1 1 0 01-1.415 0l-1.45-1.45a2.5 2.5 0 00-3.464-3.464zm5.622-4.278a1 1 0 000 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgTicket;
