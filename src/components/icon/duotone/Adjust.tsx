import React, { SVGProps } from 'react';

const SvgAdjust = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 20a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 000 12V6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAdjust;
