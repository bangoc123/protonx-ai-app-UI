import React, { SVGProps } from 'react';

const SvgPantone = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M22 15v4a2 2 0 01-2 2H8a4 4 0 110-8h12a2 2 0 012 2zM7 19a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M15.542 5.7l2.829 2.828a2 2 0 010 2.829l-8.486 8.485a4 4 0 11-5.657-5.657L12.714 5.7a2 2 0 012.828 0zM7 19a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 3h4a2 2 0 012 2v12a4 4 0 11-8 0V5a2 2 0 012-2zm2 16a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPantone;
