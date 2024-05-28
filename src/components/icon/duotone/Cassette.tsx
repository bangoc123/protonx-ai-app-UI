import React, { SVGProps } from 'react';

const SvgCassette = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={5} y={15} width={14} height={2} rx={1} />
				<path
					d='M6.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM17.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCassette;
