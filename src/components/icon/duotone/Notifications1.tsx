import React, { SVGProps } from 'react';

const SvgNotifications1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='currentColor' fillRule='evenodd'>
				<path d='M17 12h1.5a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3H7l.558-5.024a4.47 4.47 0 018.884 0L17 12z' />
				<rect opacity={0.3} x={10} y={16} width={4} height={4} rx={2} />
			</g>
		</svg>
	);
};

export default SvgNotifications1;
