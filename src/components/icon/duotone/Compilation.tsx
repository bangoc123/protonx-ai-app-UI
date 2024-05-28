import React, { SVGProps } from 'react';

const SvgCompilation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-45 8.984 14.127)'
					x={7.413}
					y={12.556}
					width={3.143}
					height={3.143}
					rx={0.75}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-45 15.27 14.127)'
					x={13.699}
					y={12.556}
					width={3.143}
					height={3.143}
					rx={0.75}
				/>
				<rect
					fill='currentColor'
					transform='rotate(-45 12.127 17.27)'
					x={10.556}
					y={15.699}
					width={3.143}
					height={3.143}
					rx={0.75}
				/>
				<rect
					fill='currentColor'
					transform='rotate(-45 12.127 10.984)'
					x={10.556}
					y={9.413}
					width={3.143}
					height={3.143}
					rx={0.75}
				/>
			</g>
		</svg>
	);
};

export default SvgCompilation;
