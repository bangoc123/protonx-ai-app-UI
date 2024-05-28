import React, { SVGProps } from 'react';

const SvgPicture = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={4} width={20} height={16} rx={2} />
				<path fill='currentColor' opacity={0.3} d='M4 20l6.5-9 6.5 9z' />
				<path fill='currentColor' d='M11 20l4.5-6 4.5 6z' />
				<circle fill='currentColor' opacity={0.3} cx={18.5} cy={8.5} r={1.5} />
			</g>
		</svg>
	);
};

export default SvgPicture;
