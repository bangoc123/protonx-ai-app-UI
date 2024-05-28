import React, { SVGProps } from 'react';

const SvgBackward = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.171 18.277l-6.74-5.88a.5.5 0 01-.002-.752l6.741-5.917a.5.5 0 01.83.376V17.9a.5.5 0 01-.829.377z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11.171 18.277l-6.74-5.88a.5.5 0 01-.002-.752l6.741-5.917a.5.5 0 01.83.376V17.9a.5.5 0 01-.829.377z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBackward;
