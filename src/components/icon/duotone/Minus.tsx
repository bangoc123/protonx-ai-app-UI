import React, { SVGProps } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<rect
				fill='currentColor'
				x={4}
				y={11}
				width={16}
				height={2}
				rx={1}
				fillRule='evenodd'
			/>
		</svg>
	);
};

export default SvgMinus;
