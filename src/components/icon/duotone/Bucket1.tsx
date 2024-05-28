import React, { SVGProps } from 'react';

const SvgBucket1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.707 3.222l-7.071 7.07c-.42.422-.615.983-.582 1.533.003.064.008.127.013.187 0 .017 12.975.017 12.975.017l1.736-1.736-7.07-7.071zm1.414-1.414l7.071 7.07a2 2 0 010 2.83l-7.07 7.07a4 4 0 01-5.658 0l-4.242-4.242a4 4 0 010-5.657l7.07-7.071a2 2 0 012.83 0z'
					fill='currentColor'
				/>
				<path
					d='M20 22a3 3 0 003-3c0-1.105-1-2.771-3-5-2 2.229-3 3.895-3 5a3 3 0 003 3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBucket1;
