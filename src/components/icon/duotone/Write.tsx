import React, { SVGProps } from 'react';

const SvgWrite = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21.748 7.099l-8.85 9.215a1.5 1.5 0 01-1.05.46l-3.723.079.079-3.738a1.5 1.5 0 01.442-1.033l9.05-8.999a1.5 1.5 0 012.118.003L21.727 5a1.5 1.5 0 01.021 2.1z'
					fill='currentColor'
				/>
				<path
					d='M12.9 2a1 1 0 010 2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5a1 1 0 012 0v5a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h6.9z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgWrite;
