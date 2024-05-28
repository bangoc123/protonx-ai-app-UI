import React, { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.744 3.279l6.503 3.716a1.5 1.5 0 01.756 1.302v7.406a1.5 1.5 0 01-.756 1.302l-6.503 3.716a1.5 1.5 0 01-1.488 0l-6.503-3.716a1.5 1.5 0 01-.756-1.302V8.297a1.5 1.5 0 01.756-1.302l6.503-3.716a1.5 1.5 0 011.488 0zM12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgComponent;
