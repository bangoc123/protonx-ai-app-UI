import React, { SVGProps } from 'react';

const SvgChatSmile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M5 15l-2 6.5 6.5-2z' />
				<path
					d='M13 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S3 17.523 3 12 7.477 2 13 2zM7.168 13.555C8.678 15.819 10.646 17 13 17c2.354 0 4.322-1.18 5.832-3.445a1 1 0 10-1.664-1.11C16.01 14.181 14.646 15 13 15c-1.646 0-3.01-.82-4.168-2.555a1 1 0 10-1.664 1.11z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgChatSmile;
