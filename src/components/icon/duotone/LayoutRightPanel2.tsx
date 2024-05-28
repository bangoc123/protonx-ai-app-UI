import React, { SVGProps } from 'react';

const SvgLayoutRightPanel2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.5 5h10A1.5 1.5 0 0122 6.5v3a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 019 9.5v-3A1.5 1.5 0 0110.5 5zm0 8h10a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 019 17.5v-3a1.5 1.5 0 011.5-1.5z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={2} y={5} width={5} height={14} rx={1} />
			</g>
		</svg>
	);
};

export default SvgLayoutRightPanel2;
