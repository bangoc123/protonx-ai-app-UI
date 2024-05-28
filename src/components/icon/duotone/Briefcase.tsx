import React, { SVGProps } from 'react';

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.84 8h12.32a2 2 0 011.993 1.834l.666 8A2 2 0 0118.826 20H5.174a2 2 0 01-1.993-2.166l.666-8A2 2 0 015.84 8zm4.66 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3z'
					fill='currentColor'
				/>
				<path
					d='M10 8H8V7a3 3 0 013-3h2a3 3 0 013 3v1h-2V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBriefcase;
