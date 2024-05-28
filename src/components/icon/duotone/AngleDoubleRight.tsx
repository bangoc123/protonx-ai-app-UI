import React, { SVGProps } from 'react';

const SvgAngleDoubleRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.293 6.707a1 1 0 111.414-1.414l6 6a1 1 0 01.03 1.383l-5.5 6a1 1 0 01-1.474-1.352l4.853-5.294-5.323-5.323z'
					fill='currentColor'
				/>
				<path
					d='M5.293 6.707a1 1 0 111.414-1.414l6 6a1 1 0 01.03 1.383l-5.5 6a1 1 0 11-1.474-1.352l4.853-5.294-5.323-5.323z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgAngleDoubleRight;
