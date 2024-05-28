import React, { SVGProps } from 'react';

const SvgSettings2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 8.686V5h3.686l2.9-2.9 2.9 2.9H19v4.515L21.485 12 19 14.485V19h-4.515l-2.9 2.9L8.687 19H5v-3.686L1.686 12 5 8.686zM12 15a3 3 0 100-6 3 3 0 000 6z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSettings2;
