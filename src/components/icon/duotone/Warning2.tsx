import React, { SVGProps } from 'react';

const SvgWarning2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.167 4.5L2.825 19.513A1 1 0 003.7 21h17.517a1 1 0 00.853-1.521L12.894 4.464a1 1 0 00-1.727.035z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect fill='currentColor' x={11} y={9} width={2} height={7} rx={1} />
				<rect fill='currentColor' x={11} y={17} width={2} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgWarning2;
