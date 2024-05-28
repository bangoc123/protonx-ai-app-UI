import React, { SVGProps } from 'react';

const SvgTemperatureFull = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 16a6 6 0 11-9-5.197V5a3 3 0 016 0v5.803A5.998 5.998 0 0118 16z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTemperatureFull;
