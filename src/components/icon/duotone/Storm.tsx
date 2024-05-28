import React, { SVGProps } from 'react';

const SvgStorm = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={8} y={2} width={14} height={2} rx={1} />
				<path
					d='M6 6h12a1 1 0 010 2H6a1 1 0 110-2zm2 4h7a1 1 0 010 2H8a1 1 0 010-2zm3 4h6a1 1 0 010 2h-6a1 1 0 010-2zm1 4h3a1 1 0 010 2h-3a1 1 0 010-2zm-1 3h1a1 1 0 010 2h-1a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgStorm;
