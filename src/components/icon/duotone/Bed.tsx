import React, { SVGProps } from 'react';

const SvgBed = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 22H2c0-2.761 2.239-4 5-4h10c2.761 0 5 1.239 5 4h-2c0-1.657-1.343-2-3-2H7c-1.657 0-3 .343-3 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect fill='currentColor' x={1} y={14} width={22} height={6} rx={1} />
				<path
					d='M13 13h-2v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v1H4a1 1 0 01-1-1V8a2 2 0 012-2h14a2 2 0 012 2v4a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBed;
