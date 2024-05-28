import React, { SVGProps } from 'react';

const SvgCap2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='currentColor' fillRule='evenodd'>
				<circle opacity={0.3} cx={12} cy={7} r={2} />
				<path d='M11 19H4V7h3.03a4.1 4.1 0 00-.03.5c0 2.177 1.718 3.993 4 4.41V19zm2 0v-7.09c2.282-.417 4-2.233 4-4.41a4.1 4.1 0 00-.03-.5H20v12h-7z' />
			</g>
		</svg>
	);
};

export default SvgCap2;
