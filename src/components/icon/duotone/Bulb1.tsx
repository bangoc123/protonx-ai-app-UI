import React, { SVGProps } from 'react';

const SvgBulb1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={9} r={8} />
				<path
					d='M14.53 11H9.462l2.514 6.465L14.53 11zm-3.962 8.362L6.538 9H17.47l-4.096 10.367-1.398-.552-1.408.547z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M10 22h4a2 2 0 11-4 0z' fill='currentColor' opacity={0.3} />
				<path
					d='M9 20a1 1 0 010-2 1 1 0 010-2h6a1 1 0 010 2 1 1 0 010 2 1 1 0 010 2H9a1 1 0 010-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBulb1;
