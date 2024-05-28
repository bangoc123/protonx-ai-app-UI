import React, { SVGProps } from 'react';

const SvgForward = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.829 18.277l6.74-5.88a.5.5 0 00.002-.752L6.83 5.728a.5.5 0 00-.83.376V17.9a.5.5 0 00.829.377z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.829 18.277l6.74-5.88a.5.5 0 00.002-.752L12.83 5.728a.5.5 0 00-.83.376V17.9a.5.5 0 00.829.377z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgForward;
