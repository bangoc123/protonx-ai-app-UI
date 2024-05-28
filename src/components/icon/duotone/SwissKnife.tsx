import React, { SVGProps } from 'react';

const SvgSwissKnife = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15.784 14l-2.806 2.806-5.15-5.15a4 4 0 010-5.656L14 12.172V8a6 6 0 016-6v12h-4.216z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.5 12h13a4.5 4.5 0 110 9h-13a4.5 4.5 0 110-9zm14 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSwissKnife;
