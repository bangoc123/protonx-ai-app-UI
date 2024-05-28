import React, { SVGProps } from 'react';

const SvgMailUnlocked = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 17v-1a1 1 0 00-2 0H0a2 2 0 114 0v1h4a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.984 18A7.5 7.5 0 004 11.15V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-7.016zm6.16-11.16L13 10.148 6.856 6.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMailUnlocked;
