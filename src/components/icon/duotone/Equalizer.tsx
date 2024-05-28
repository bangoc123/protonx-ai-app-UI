import React, { SVGProps } from 'react';

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={13}
					y={4}
					width={3}
					height={16}
					rx={1.5}
				/>
				<rect fill='currentColor' x={8} y={9} width={3} height={11} rx={1.5} />
				<rect fill='currentColor' x={18} y={11} width={3} height={9} rx={1.5} />
				<rect fill='currentColor' x={3} y={13} width={3} height={7} rx={1.5} />
			</g>
		</svg>
	);
};

export default SvgEqualizer;
