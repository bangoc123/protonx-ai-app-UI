import React, { SVGProps } from 'react';

const SvgLamp1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M10 19h4c1.1 0 2 .9 2 2H8c0-1.1.9-2 2-2z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
			<path
				d='M12 12c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1z'
				fill='currentColor'
				opacity={0.3}
				fillRule='evenodd'
				clipRule='evenodd'
			/>
			<path
				d='M18.5 5.4c-.3-.8-1-1.4-1.9-1.4H7.4c-.8 0-1.6.6-1.9 1.4L3 13h18l-2.5-7.6zm-1.2 5.7c-.5.1-1.1-.2-1.2-.7l-.8-2.9c-.2-.5.1-1.1.7-1.2.5-.2 1 .1 1.2.7l.8 2.9c.1.5-.2 1-.7 1.2z'
				fill='currentColor'
			/>
			<path
				d='M17.2 7c-.2-.6-.7-.9-1.2-.7-.5.1-.9.7-.7 1.2l.8 2.9c.1.5.7.9 1.2.7s.9-.7.7-1.2L17.2 7z'
				fill='currentColor'
				opacity={0.3}
			/>
		</svg>
	);
};

export default SvgLamp1;
