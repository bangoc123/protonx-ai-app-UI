import React, { SVGProps } from 'react';

const SvgCrown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.26 5.814L2 16h20L12.74 5.814a1 1 0 00-1.48 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.006 15.712l8.275-8.86a1 1 0 011.73.684V20H2V7.536a1 1 0 011.73-.683l8.276 8.859z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCrown;
