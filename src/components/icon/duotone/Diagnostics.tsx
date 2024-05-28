import React, { SVGProps } from 'react';

const SvgDiagnostics = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={3} width={20} height={18} rx={2} />
				<path
					d='M9.949 13.316A1 1 0 019 14H5a1 1 0 010-2h3.28l1.771-5.316c.317-.95 1.676-.897 1.92.073l1.844 7.378.79-1.582A1 1 0 0115.5 12H19a1 1 0 010 2h-2.882l-1.724 3.447c-.415.83-1.639.696-1.864-.204l-1.667-6.669-.914 2.742z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={19} cy={6} r={1} />
			</g>
		</svg>
	);
};

export default SvgDiagnostics;
