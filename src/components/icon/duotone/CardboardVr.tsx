import React, { SVGProps } from 'react';

const SvgCardboardVr = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M6 4h12l2 2.5H4z' />
				<path
					d='M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2h-3c-1 0-1.5-2-4-2s-2.5 2-4 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm3 8a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCardboardVr;
