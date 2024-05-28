import React, { SVGProps } from 'react';

const SvgDirection1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 16.381V6.472l-6.005 12.01L12 16.382zm-9.118 3.854l8.402-16.804a.8.8 0 011.432 0l8.402 16.804a.8.8 0 01-.98 1.113L12 18.5l-8.138 2.848a.8.8 0 01-.98-1.113z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDirection1;
