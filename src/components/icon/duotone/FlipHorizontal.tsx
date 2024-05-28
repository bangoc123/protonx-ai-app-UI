import React, { SVGProps } from 'react';

const SvgFlipHorizontal = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.739 19H8.5a.5.5 0 00.5-.5V6.596a.5.5 0 00-.964-.185L3.274 18.314A.5.5 0 003.74 19z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20.261 19H15.5a.5.5 0 01-.5-.5V6.596a.5.5 0 01.964-.185l4.762 11.903a.5.5 0 01-.465.686z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={11} y={2} width={2} height={20} rx={1} />
			</g>
		</svg>
	);
};

export default SvgFlipHorizontal;
