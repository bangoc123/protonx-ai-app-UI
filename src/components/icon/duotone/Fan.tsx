import React, { SVGProps } from 'react';

const SvgFan = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M23.374 18.897c-1.242 2.152-4.964 2.33-8.312.397-3.348-1.933-5.055-5.245-3.812-7.397 1.243-2.152 4.964-2.33 8.312-.397 3.348 1.933 5.055 5.245 3.812 7.397z'
					fill='currentColor'
					opacity={0.3}
				/>
				<ellipse
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-180 12.5 9)'
					cx={12.5}
					cy={9}
					rx={4.5}
					ry={7}
				/>
				<path
					d='M1.25 18.897c-1.243-2.152.464-5.464 3.812-7.397 3.348-1.933 7.07-1.755 8.312.397 1.243 2.152-.464 5.464-3.812 7.397-3.348 1.933-7.07 1.755-8.312-.397z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFan;
