import React, { SVGProps } from 'react';

const SvgRec = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 16a4 4 0 100-8 4 4 0 000 8zm0 4a8 8 0 110-16 8 8 0 010 16z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRec;
