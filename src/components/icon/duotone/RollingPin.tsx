import React, { SVGProps } from 'react';

const SvgRollingPin = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.282 14.475l9.193-9.193a1.5 1.5 0 012.121 0l2.122 2.122a1.5 1.5 0 010 2.121l-9.193 9.193a1.5 1.5 0 01-2.121 0l-2.122-2.122a1.5 1.5 0 010-2.121z'
					fill='currentColor'
				/>
				<path
					d='M3.515 18.364l.707-.707a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-.707.707a1.5 1.5 0 01-2.121-2.121zm14.849-14.85a1.5 1.5 0 012.121 2.122l-.707.707a.5.5 0 01-.707 0L17.657 4.93a.5.5 0 010-.707l.707-.707z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRollingPin;
