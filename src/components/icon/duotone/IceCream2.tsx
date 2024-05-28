import React, { SVGProps } from 'react';

const SvgIceCream2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 2a6 6 0 016 6v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8a6 6 0 016-6z'
					fill='currentColor'
				/>
				<path d='M10.5 19h3v2.5a1.5 1.5 0 01-3 0V19z' fill='currentColor' opacity={0.3} />
			</g>
		</svg>
	);
};

export default SvgIceCream2;
