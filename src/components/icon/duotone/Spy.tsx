import React, { SVGProps } from 'react';

const SvgSpy = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 3a8 8 0 018 8v10a1 1 0 01-1 1H5a1 1 0 01-1-1V11a8 8 0 018-8zm-3 7a3 3 0 000 6h6a3 3 0 000-6H9z'
					fill='currentColor'
				/>
				<path
					d='M15 14a1 1 0 110-2 1 1 0 010 2zm-6 0a1 1 0 110-2 1 1 0 010 2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSpy;
