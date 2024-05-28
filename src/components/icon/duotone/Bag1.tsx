import React, { SVGProps } from 'react';

const SvgBag1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14 9V8a2 2 0 10-4 0v1H8V8a4 4 0 118 0v1h-2zm0 0V8a2 2 0 10-4 0v1H8V8a4 4 0 118 0v1h-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.847 9h10.306a1 1 0 01.986.836l1.473 8.835A2 2 0 0117.639 21H6.361a2 2 0 01-1.973-2.329l1.473-8.835A1 1 0 016.847 9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBag1;
