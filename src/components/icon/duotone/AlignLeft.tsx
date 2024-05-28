import React, { SVGProps } from 'react';

const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={4} y={5} width={16} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={4} y={13} width={16} height={2} rx={1} />
				<path
					d='M5 9h8a1 1 0 010 2H5a1 1 0 010-2zm0 8h8a1 1 0 010 2H5a1 1 0 010-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAlignLeft;
