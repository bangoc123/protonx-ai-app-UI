import React, { SVGProps } from 'react';

const SvgBottle1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.2 9.733L8.7 6.4a1 1 0 01.8-.4h5a1 1 0 01.8.4l2.5 3.333a1 1 0 01.2.6V21a2 2 0 01-2 2H8a2 2 0 01-2-2V10.333a1 1 0 01.2-.6zM9 12a1 1 0 00-1 1v7a1 1 0 001 1h1a1 1 0 001-1v-7a1 1 0 00-1-1H9z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={9} y={1} width={6} height={3} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBottle1;
