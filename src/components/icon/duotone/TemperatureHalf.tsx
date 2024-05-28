import React, { SVGProps } from 'react';

const SvgTemperatureHalf = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 16a6 6 0 11-9-5.197V5a3 3 0 016 0v5.803A5.998 5.998 0 0118 16zM12 4a1 1 0 00-1 1v5a1 1 0 002 0V5a1 1 0 00-1-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTemperatureHalf;
