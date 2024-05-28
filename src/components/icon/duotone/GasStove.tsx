import React, { SVGProps } from 'react';

const SvgGasStove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21 10H3V5a1 1 0 011-1h16a1 1 0 011 1v5zm-5-4a1 1 0 100 2 1 1 0 000-2zM8 6a1 1 0 110 2 1 1 0 010-2zm13 5v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11h18zM8 13c-.552 0-1 .522-1 1.167v4.666C7 19.478 7.448 20 8 20h8c.552 0 1-.522 1-1.167v-4.666c0-.645-.448-1.167-1-1.167H8z'
					fill='currentColor'
				/>
				<path
					d='M6 3h4a1 1 0 011 1H5a1 1 0 011-1zm10 0h2a1 1 0 011 1h-4a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgGasStove;
