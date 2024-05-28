import React, { SVGProps } from 'react';

const SvgCursor = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.233 14.367l2.078 4.456a.5.5 0 01-.242.665l-1.812.845a.5.5 0 01-.665-.242l-2.125-4.558-2.613 2.613A.5.5 0 018 17.793V5.13a.5.5 0 01.836-.37l9.306 8.46a.5.5 0 01-.298.869l-3.611.278z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCursor;
