import React, { SVGProps } from 'react';

const SvgVolumeDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={16} y={11} width={7} height={2} rx={1} />
				<path
					d='M7 16l-3.392-.678A2 2 0 012 13.36v-2.72a2 2 0 011.608-1.962L7 8l3.293-3.293A1 1 0 0112 5.414v13.172a1 1 0 01-1.707.707L7 16z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgVolumeDown;
