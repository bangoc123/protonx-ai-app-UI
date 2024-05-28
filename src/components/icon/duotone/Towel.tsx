import React, { SVGProps } from 'react';

const SvgTowel = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 16H9a1 1 0 010-2h8a1 1 0 000-2H9a3 3 0 000 6h10.5c1.5 0 1.5.5 1.5 1s0 1-1.5 1H7a4 4 0 01-4-4V8a4 4 0 014-4h10a4 4 0 014 4v5a3 3 0 01-3 3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTowel;
