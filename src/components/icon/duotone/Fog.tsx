import React, { SVGProps } from 'react';

const SvgFog = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={5} width={20} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={2} y={17} width={20} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={2} y={9} width={5} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={16} y={13} width={6} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={9} y={9} width={13} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={2} y={13} width={12} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgFog;
