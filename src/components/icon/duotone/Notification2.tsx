import React, { SVGProps } from 'react';

const SvgNotification2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.207 4A5.5 5.5 0 0020 10.793V17a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h6.207z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={18.5} cy={5.5} r={2.5} />
			</g>
		</svg>
	);
};

export default SvgNotification2;
