import React, { SVGProps } from 'react';

const SvgAirConditioning = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 3h18a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm2 5a1 1 0 100 2h14a1 1 0 000-2H5z'
					fill='currentColor'
				/>
				<path
					d='M17.291 14.294l1.418 1.412a2.688 2.688 0 00.296 4.05l.593.443-1.196 1.602-.594-.443a4.688 4.688 0 01-.517-7.064zm-6 1l1.418 1.412a2.688 2.688 0 00.296 4.05l.593.443-1.196 1.602-.594-.443a4.688 4.688 0 01-.517-7.064zm-6-1l1.418 1.412a2.688 2.688 0 00.296 4.05l.593.443L6.402 21.8l-.594-.443a4.688 4.688 0 01-.517-7.064z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgAirConditioning;
