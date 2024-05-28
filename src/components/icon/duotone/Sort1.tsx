import React, { SVGProps } from 'react';

const SvgSort1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={4} y={5} width={16} height={3} rx={1.5} />
				<path
					d='M7.5 11h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3zm3 6h3a1.5 1.5 0 010 3h-3a1.5 1.5 0 010-3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSort1;
