import React, { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M12 11a4 4 0 110-8 4 4 0 010 8z' fill='currentColor' opacity={0.3} />
				<path
					d='M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUser;
