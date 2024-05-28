import React, { SVGProps } from 'react';

const SvgAnchorCenter = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' d='M8 7h8v2H8z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={13} r={3} />
			</g>
		</svg>
	);
};

export default SvgAnchorCenter;
