import React, { SVGProps } from 'react';

const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={5} width={20} height={14} rx={2} />
				<path fill='currentColor' d='M2 8h20v3H2z' />
				<rect fill='currentColor' opacity={0.3} x={16} y={14} width={4} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgCreditCard;
