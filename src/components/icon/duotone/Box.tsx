import React, { SVGProps } from 'react';

const SvgBox = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 7h16v12.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19.5V7zm6 3a1 1 0 000 2h4a1 1 0 000-2h-4z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={2} y={3} width={20} height={4} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBox;
