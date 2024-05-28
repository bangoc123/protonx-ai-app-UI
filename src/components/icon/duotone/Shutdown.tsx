import React, { SVGProps } from 'react';

const SvgShutdown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.623 5.303a1 1 0 111.096 1.673 6 6 0 106.669.071 1 1 0 111.13-1.65 8 8 0 11-8.895-.095z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={11} y={3} width={2} height={10} rx={1} />
			</g>
		</svg>
	);
};

export default SvgShutdown;
