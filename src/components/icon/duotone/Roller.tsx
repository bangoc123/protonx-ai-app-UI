import React, { SVGProps } from 'react';

const SvgRoller = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={3} y={2} width={15} height={5} rx={1} />
				<rect fill='currentColor' x={9} y={12} width={4} height={10} rx={1} />
				<path
					d='M12 12h-2v-1a2 2 0 012-2h7V5.5h-1v-2h1a2 2 0 012 2V9a2 2 0 01-2 2h-7v1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRoller;
