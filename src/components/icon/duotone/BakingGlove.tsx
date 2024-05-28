import React, { SVGProps } from 'react';

const SvgBakingGlove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.036 17.266L2.54 14.235a2 2 0 012.237-3.317L7 12.418V8a6 6 0 1112 0v9a1 1 0 01-1 1H8a1 1 0 01-.964-.734z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={6} y={20} width={14} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBakingGlove;
