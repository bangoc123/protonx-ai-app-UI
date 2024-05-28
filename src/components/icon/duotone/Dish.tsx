import React, { SVGProps } from 'react';

const SvgDish = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a9 9 0 110-18 9 9 0 010 18zm0-3a6 6 0 100-12 6 6 0 000 12z'
					fill='currentColor'
				/>
				<path d='M12 16a4 4 0 100-8 4 4 0 000 8z' fill='currentColor' opacity={0.3} />
			</g>
		</svg>
	);
};

export default SvgDish;
