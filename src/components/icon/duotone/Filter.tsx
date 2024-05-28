import React, { SVGProps } from 'react';

const SvgFilter = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 4h14a.5.5 0 01.4.8L14 12v8.191a.5.5 0 01-.724.447L10 19v-7L4.6 4.8A.5.5 0 015 4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFilter;
