import React, { SVGProps } from 'react';

const SvgLayoutLeftPanel2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10 4h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1V5a1 1 0 011-1zm0 6h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2a1 1 0 011-1zm0 6h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2a1 1 0 011-1z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={2} y={4} width={5} height={16} rx={1} />
			</g>
		</svg>
	);
};

export default SvgLayoutLeftPanel2;
