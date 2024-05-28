import React, { SVGProps } from 'react';

const SvgPizza = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2.88 5.666A16.686 16.686 0 0111.956 3c3.344 0 6.46.979 9.075 2.666L11.955 22 2.881 5.666z'
					fill='currentColor'
					opacity={0.3}
				/>
				<circle fill='currentColor' opacity={0.3} cx={9.5} cy={9.5} r={1.5} />
				<circle fill='currentColor' opacity={0.3} cx={15.5} cy={7.5} r={1.5} />
				<circle fill='currentColor' opacity={0.3} cx={12.5} cy={15.5} r={1.5} />
			</g>
		</svg>
	);
};

export default SvgPizza;
