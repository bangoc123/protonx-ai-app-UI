import React, { SVGProps } from 'react';

const SvgOption = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={12} y={7} width={10} height={2} rx={1} />
				<path
					d='M2 9a1 1 0 110-2h5.35a2 2 0 011.828 1.188L12.65 16H22a1 1 0 010 2h-9.35a2 2 0 01-1.828-1.188L7.35 9H2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgOption;
