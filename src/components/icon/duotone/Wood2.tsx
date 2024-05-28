import React, { SVGProps } from 'react';

const SvgWood2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M12 2L4 19h16z' />
				<rect fill='currentColor' x={11} y={11} width={2} height={11} rx={1} />
			</g>
		</svg>
	);
};

export default SvgWood2;
