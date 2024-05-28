import React, { SVGProps } from 'react';

const SvgLike = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9 10v9l1.153.384a12 12 0 003.794.616h3.594a3 3 0 002.941-2.412l.75-3.746a3 3 0 00-3.142-3.581l-3.59.239.364-4.006A1.37 1.37 0 0013.5 5a2.65 2.65 0 00-2.272 1.286L9 10z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={2} y={9} width={5} height={11} rx={1} />
			</g>
		</svg>
	);
};

export default SvgLike;
