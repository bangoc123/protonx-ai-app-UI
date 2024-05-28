import React, { SVGProps } from 'react';

const SvgMidi = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 6h17a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					fill='currentColor'
					opacity={0.3}
					d='M7 13h1v6H7zM12 13h1v6h-1zM17 13h1v6h-1z'
				/>
				<path
					d='M6 6h3v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6zM11 6h3v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6zM16 6h3v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMidi;
