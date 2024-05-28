import React, { SVGProps } from 'react';

const SvgBuilding = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M17 2H7c-1.1 0-2 .9-2 2v17h5.5v-3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v3H19V4c0-1.1-.9-2-2-2zm-6 12c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1zm0-4c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1zm0-4c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1zm5 8c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1zm0-4c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1zm0-4c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1z'
				fill='currentColor'
			/>
			<path
				d='M15 8h-1c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1z'
				opacity={0.3}
				fill='currentColor'
			/>
			<path
				d='M4 21h16c.6 0 1 .4 1 1v.4c0 .3-.3.6-.6.6H3.6c-.3 0-.6-.3-.6-.6V22c0-.6.4-1 1-1z'
				opacity={0.3}
				fillRule='evenodd'
				clipRule='evenodd'
				fill='currentColor'
			/>
		</svg>
	);
};

export default SvgBuilding;
