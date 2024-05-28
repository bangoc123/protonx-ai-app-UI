import React, { SVGProps } from 'react';

const SvgArrowFromTop = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={11} y={7} width={2} height={14} rx={1} />
				<path
					d='M6.707 13.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.383.03l6-5.5a1 1 0 10-1.352-1.474l-5.294 4.853-5.323-5.323z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={3} y={3} width={18} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgArrowFromTop;
