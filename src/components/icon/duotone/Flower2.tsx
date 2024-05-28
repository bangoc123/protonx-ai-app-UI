import React, { SVGProps } from 'react';

const SvgFlower2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={15} cy={17} r={5} />
				<circle fill='currentColor' opacity={0.3} cx={9} cy={17} r={5} />
				<circle fill='currentColor' opacity={0.3} cx={7} cy={11} r={5} />
				<circle fill='currentColor' opacity={0.3} cx={17} cy={11} r={5} />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={7} r={5} />
			</g>
		</svg>
	);
};

export default SvgFlower2;
