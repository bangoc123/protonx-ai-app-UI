import React, { SVGProps } from 'react';

const SvgCompass = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.077 12.304a6.732 6.732 0 002.391 1.804L5 23l-.5-5 2.577-5.696zm7.51 1.956a6.72 6.72 0 002.474-1.64L19.5 18l-.5 5-4.413-8.74zM12 0a1.5 1.5 0 011.5 1.5V4h-3V1.5A1.5 1.5 0 0112 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12 10a2 2 0 100-4 2 2 0 000 4zm0 3a5 5 0 110-10 5 5 0 010 10z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCompass;
