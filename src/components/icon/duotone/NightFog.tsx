import React, { SVGProps } from 'react';

const SvgNightFog = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.881 3a5.5 5.5 0 004.716 8.25A5.5 5.5 0 1112.881 3z'
					fill='currentColor'
				/>
				<path
					d='M2.5 16h19a.5.5 0 110 1h-19a.5.5 0 110-1zm0 2h5a.5.5 0 110 1h-5a.5.5 0 110-1zm12 2h7a.5.5 0 110 1h-7a.5.5 0 110-1zm-5-2h12a.5.5 0 110 1h-12a.5.5 0 110-1zm-7 2h10a.5.5 0 110 1h-10a.5.5 0 110-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgNightFog;
