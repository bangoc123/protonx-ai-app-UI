import React, { SVGProps } from 'react';

const SvgArrowFromBottom = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={11} y={3} width={2} height={14} rx={1} />
				<path
					d='M6.707 10.707a1 1 0 11-1.414-1.414l6-6a1 1 0 011.383-.03l6 5.5a1 1 0 11-1.352 1.474L12.03 5.384l-5.323 5.323z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={3} y={19} width={18} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgArrowFromBottom;
