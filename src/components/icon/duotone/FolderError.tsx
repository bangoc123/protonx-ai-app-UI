import React, { SVGProps } from 'react';

const SvgFolderError = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2 13.15V5.5A1.5 1.5 0 013.5 4h2.879a1.5 1.5 0 011.06.44L10 7h10.5A1.5 1.5 0 0122 8.5v11a1.5 1.5 0 01-1.5 1.5h-9.516A7.5 7.5 0 002 13.15z'
					fill='currentColor'
				/>
				<path
					d='M4.5 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0 7a1 1 0 110-2 1 1 0 010 2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFolderError;
