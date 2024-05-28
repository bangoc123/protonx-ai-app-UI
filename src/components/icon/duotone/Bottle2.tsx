import React, { SVGProps } from 'react';

const SvgBottle2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 18v4a1 1 0 001 1h6a1 1 0 001-1V10.414a1 1 0 00-.293-.707l-1.414-1.414A1 1 0 0114 7.586V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2.586a1 1 0 01-.293.707L8.293 9.707a1 1 0 00-.293.707V13h4v5H8z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={10} y={1} width={4} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBottle2;
