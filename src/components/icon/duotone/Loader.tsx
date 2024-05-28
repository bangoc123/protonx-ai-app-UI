import React, { SVGProps } from 'react';

const SvgLoader = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 4a1 1 0 011 1v12h9a1 1 0 010 2H9a1 1 0 01-1-1 1 1 0 01-1-1V6H5a1 1 0 110-2h3z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect fill='currentColor' opacity={0.3} x={11} y={7} width={8} height={8} rx={4} />
				<circle fill='currentColor' cx={8} cy={18} r={3} />
			</g>
		</svg>
	);
};

export default SvgLoader;
