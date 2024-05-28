import React, { SVGProps } from 'react';

const SvgMailbox2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M22 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4h4.28l.543 1.632A2 2 0 008.721 18h6.661a2 2 0 001.789-1.106L18.118 15H22z'
					fill='currentColor'
				/>
				<path
					d='M2.563 13l3.364-5.98A2 2 0 017.67 6h8.66a2 2 0 011.743 1.02L21.437 13h-3.319a2 2 0 00-1.789 1.106L15.382 16H8.721l-.544-1.632A2 2 0 006.279 13H2.563z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgMailbox2;
