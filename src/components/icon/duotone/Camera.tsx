import React, { SVGProps } from 'react';

const SvgCamera = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm7 10a4 4 0 100-8 4 4 0 000 8z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={9} y={4} width={6} height={2} rx={1} />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={13} r={2} />
			</g>
		</svg>
	);
};

export default SvgCamera;
