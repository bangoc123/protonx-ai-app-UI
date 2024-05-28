import React, { SVGProps } from 'react';

const SvgWallet = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={20.5} cy={12.5} r={1.5} />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-15 12 6.5)'
					x={3}
					y={3}
					width={18}
					height={7}
					rx={1}
				/>
				<path
					d='M22 9.337a3.5 3.5 0 100 6.326V18a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v3.337z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgWallet;
