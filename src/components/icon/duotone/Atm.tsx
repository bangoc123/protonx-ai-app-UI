import React, { SVGProps } from 'react';

const SvgAtm = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={2} y={4} width={20} height={5} rx={1} />
				<path
					d='M5 7h3v14H7a2 2 0 01-2-2V7zm14 0v12a2 2 0 01-2 2h-6V7h8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAtm;
