import React, { SVGProps } from 'react';

const SvgRoadCone = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.852 9l.926 3H8.222l.926-3h5.704zm-.926-3h-3.852l.631-2.044a1.355 1.355 0 012.59 0L13.926 6zm2.778 9l1.235 4H6.06l1.235-4h9.408z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={3} y={20} width={18} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgRoadCone;
