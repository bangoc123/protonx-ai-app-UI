import React, { SVGProps } from 'react';

const SvgCd = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a9 9 0 110-18 9 9 0 010 18zm0-6a3 3 0 100-6 3 3 0 000 6z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={1} />
			</g>
		</svg>
	);
};

export default SvgCd;
