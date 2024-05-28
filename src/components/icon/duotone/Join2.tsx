import React, { SVGProps } from 'react';

const SvgJoin2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M18 12l-5-6H5v4h5.833L14 13.8V19h4v-7z' fill='currentColor' />
				<circle fill='currentColor' opacity={0.3} cx={8} cy={16} r={2} />
			</g>
		</svg>
	);
};

export default SvgJoin2;
