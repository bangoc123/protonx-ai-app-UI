import React, { SVGProps } from 'react';

const SvgChicken = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<g fill='currentColor'>
					<path d='M20.132 4.368a5.882 5.882 0 01-1.43 9.37l-5.105 2.673a4.08 4.08 0 01-5.508-5.508l2.674-5.105a5.882 5.882 0 019.369-1.43z' />
					<path
						d='M4.869 17.51l1.474-1.474 2.121 2.12-1.474 1.475a1.5 1.5 0 11-2.852.73 1.5 1.5 0 11.73-2.852z'
						opacity={0.3}
					/>
				</g>
			</g>
		</svg>
	);
};

export default SvgChicken;
