import React, { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.5 8L6 19c.035.133.063.231.082.294C6.437 20.431 8.076 21 9 21c1.5 0 2-2 3.5-2s2.092 1.984 3.5 2c.939.01 1.939-.656 3-2L14.5 8h-4zM11.3 6l1.2-3 1.2 3h-2.4zm3.2 2h-4 4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPencil;
