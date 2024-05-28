import React, { SVGProps } from 'react';

const SvgStairs = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21 5.5v12a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-3A1.5 1.5 0 014.5 13H9V9.5A1.5 1.5 0 0110.5 8H15V5.5A1.5 1.5 0 0116.5 4h3A1.5 1.5 0 0121 5.5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgStairs;
