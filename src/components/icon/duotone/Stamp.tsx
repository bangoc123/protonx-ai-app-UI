import React, { SVGProps } from 'react';

const SvgStamp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.986 8.834c.01.054.014.11.014.166v2h4a2 2 0 012 2v3H5v-3a2 2 0 012-2h4V9c0-.057.005-.112.014-.166A3.001 3.001 0 0112 3a3 3 0 01.986 5.834z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={5} y={18} width={14} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgStamp;
