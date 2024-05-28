import React, { SVGProps } from 'react';

const SvgBox1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M6 3h12l2 3.5H4z' />
				<path
					d='M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2zm3 4a1 1 0 100 2h6a1 1 0 000-2H9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBox1;
