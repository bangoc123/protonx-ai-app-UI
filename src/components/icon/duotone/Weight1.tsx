import React, { SVGProps } from 'react';

const SvgWeight1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.342 9h7.316a3 3 0 012.91 2.272L21 21H3l2.432-9.728A3 3 0 018.342 9zm2.922 9h1.344v-5.664h-1.232l-1.864 1.368.696.952 1.056-.816V18z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={12} cy={5.5} r={2.5} />
			</g>
		</svg>
	);
};

export default SvgWeight1;
