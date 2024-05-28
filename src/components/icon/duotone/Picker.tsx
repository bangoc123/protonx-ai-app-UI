import React, { SVGProps } from 'react';

const SvgPicker = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.232 10.232l3.536 3.536-5.304 5.303a2.5 2.5 0 01-3.535-3.535l5.303-5.304z'
					fill='currentColor'
				/>
				<path
					d='M13.768 6.697l1.768-1.768a2.5 2.5 0 113.535 3.535l-1.768 1.768 1.061 1.06a1.5 1.5 0 11-2.121 2.122l-5.657-5.657a1.5 1.5 0 012.121-2.121l1.06 1.06z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPicker;
