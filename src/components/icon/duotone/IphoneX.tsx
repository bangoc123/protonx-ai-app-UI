import React, { SVGProps } from 'react';

const SvgIphoneX = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H8z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M8 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H8zM8 1h8a2.75 2.75 0 012.75 2.75v16.5A2.75 2.75 0 0116 23H8a2.75 2.75 0 01-2.75-2.75V3.75A2.75 2.75 0 018 1zm1.5.75h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIphoneX;
