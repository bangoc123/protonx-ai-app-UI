import React, { SVGProps } from 'react';

const SvgVisible = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 12s2.455-6 9-6c4.91 0 9 6 9 6s-4.09 6-9 6c-6.545 0-9-6-9-6z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M12 15a3 3 0 110-6 3 3 0 010 6z' fill='currentColor' opacity={0.3} />
			</g>
		</svg>
	);
};

export default SvgVisible;
