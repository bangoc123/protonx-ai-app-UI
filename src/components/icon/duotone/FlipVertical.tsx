import React, { SVGProps } from 'react';

const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 3.739V8.5a.5.5 0 00.5.5h11.904a.5.5 0 00.185-.964L5.686 3.274A.5.5 0 005 3.74z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5 20.261V15.5a.5.5 0 01.5-.5h11.904a.5.5 0 01.185.964L5.686 20.726A.5.5 0 015 20.26z'
					fill='currentColor'
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(90 12 12)'
					x={11}
					y={2}
					width={2}
					height={20}
					rx={1}
				/>
			</g>
		</svg>
	);
};

export default SvgFlipVertical;
