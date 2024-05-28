import React, { SVGProps } from 'react';

const SvgKnifeFork2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.988 3.06l7.071 7.071-2.828 2.828-4.243-4.242a4 4 0 010-5.657zM17.754 3.907L14.889 7.41a.552.552 0 00.777.778l3.502-2.866.707.707-2.865 3.503a.552.552 0 00.777.777l3.502-2.865.708.707-3.182 3.182a3.5 3.5 0 11-4.95-4.95L17.047 3.2l.707.707z'
					fill='currentColor'
				/>
				<path
					d='M11.075 13.925c.397.396.413 1.033.037 1.449l-4.97 5.498a1.426 1.426 0 11-2.014-2.014l5.498-4.97a1.052 1.052 0 011.45.037zM13.075 13.925a1.052 1.052 0 011.45-.037l5.498 4.97a1.426 1.426 0 11-2.014 2.014l-4.97-5.498a1.052 1.052 0 01.036-1.45z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgKnifeFork2;
