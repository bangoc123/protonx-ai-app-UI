import React, { SVGProps } from 'react';

const SvgLayoutTopPanel1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={2} y={4} width={19} height={4} rx={1} />
				<path
					d='M3 10h3a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1zm7 0h3a1 1 0 011 1v8a1 1 0 01-1 1h-3a1 1 0 01-1-1v-8a1 1 0 011-1zm7 0h3a1 1 0 011 1v8a1 1 0 01-1 1h-3a1 1 0 01-1-1v-8a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgLayoutTopPanel1;
