import React, { SVGProps } from 'react';

const SvgBinocular = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.843 16h-1.686l-.172.64a4.547 4.547 0 01-8.784-2.354l1.72-6.418A4.547 4.547 0 0112 6.383a4.547 4.547 0 018.08 1.484l1.719 6.419a4.547 4.547 0 01-8.784 2.353L12.843 16zm4.613 2.105c1.507 0 2.729-1.267 2.729-2.83 0-1.564-1.222-2.831-2.729-2.831-1.506 0-2.728 1.267-2.728 2.83 0 1.564 1.222 2.831 2.728 2.831zm-10.912 0c1.506 0 2.728-1.267 2.728-2.83 0-1.564-1.222-2.831-2.728-2.831-1.507 0-2.729 1.267-2.729 2.83 0 1.564 1.222 2.831 2.729 2.831z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBinocular;
