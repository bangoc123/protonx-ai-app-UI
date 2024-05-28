import React, { SVGProps } from 'react';

const SvgLayoutLeftPanel1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={9} y={5} width={13} height={14} rx={1.5} />
				<rect fill='currentColor' opacity={0.3} x={2} y={5} width={5} height={14} rx={1} />
			</g>
		</svg>
	);
};

export default SvgLayoutLeftPanel1;
