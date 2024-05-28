import React, { SVGProps } from 'react';

const SvgGenerator = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={6} width={20} height={14} rx={2} />
				<path
					d='M5 4h2a1 1 0 011 1v1H4V5a1 1 0 011-1zm12 0h2a1 1 0 011 1v1h-4V5a1 1 0 011-1zM7 12v-1a1 1 0 012 0v1h1a1 1 0 010 2H9v1a1 1 0 01-2 0v-1H6a1 1 0 010-2h1z'
					fill='currentColor'
				/>
				<rect fill='currentColor' x={14} y={12} width={4} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgGenerator;
