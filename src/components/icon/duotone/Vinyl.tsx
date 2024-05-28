import React, { SVGProps } from 'react';

const SvgVinyl = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a9 9 0 110-18 9 9 0 010 18zm0-5a4 4 0 100-8 4 4 0 000 8z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={1} />
			</g>
		</svg>
	);
};

export default SvgVinyl;
