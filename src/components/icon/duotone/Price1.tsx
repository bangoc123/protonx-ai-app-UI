import React, { SVGProps } from 'react';

const SvgPrice1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.523 14.029a1.798 1.798 0 010-2.535l8.09-7.953c.336-.331.789-.516 1.26-.516h6.454c.993 0 1.798.805 1.798 1.797v6.436c0 .483-.194.945-.538 1.283l-8.077 7.932a1.798 1.798 0 01-2.543 0l-6.444-6.444zM16.93 9.017a1.798 1.798 0 100-3.596 1.798 1.798 0 000 3.596z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPrice1;
