import React, { SVGProps } from 'react';

const SvgChatLocked = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M5 15l-2 6.5 6.5-2z' />
				<path
					d='M16 10v-.5a2.5 2.5 0 10-5 0v.5a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1zm-2.5 11a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm0-13A1.5 1.5 0 0115 9.5v.5h-3v-.5A1.5 1.5 0 0113.5 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgChatLocked;
