import React, { SVGProps } from 'react';

const SvgSieve = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M9 18h6l.6 1.7c.2.5-.1 1.1-.6 1.3-.1 0-.2.1-.3.1H9.4c-.6 0-1-.4-1-1 0-.1 0-.2.1-.3L9 18z'
				opacity={0.3}
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
			<path
				d='M21 9v1c0 5-4 9-9 9s-9-4-9-9V9H2c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1h-1zM6 11c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm2 3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm2 3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-2-3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-6-3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
		</svg>
	);
};

export default SvgSieve;
