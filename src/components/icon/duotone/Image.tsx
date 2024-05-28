import React, { SVGProps } from 'react';

const SvgImage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6 5h12a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3zM5 17h9l-4.5-6L5 17zm11-3a3 3 0 100-6 3 3 0 000 6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgImage;
