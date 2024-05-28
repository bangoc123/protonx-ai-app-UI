import React, { SVGProps } from 'react';

const SvgCouch = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='currentColor' fillRule='evenodd'>
				<path
					d='M6 20H4c0-2.761 2.239-4 5-4h6c2.761 0 5 1.239 5 4h-2c0-1.657-1.343-2-3-2H9c-1.657 0-3 .343-3 2z'
					opacity={0.3}
				/>
				<path
					d='M23 8h-1.826a2 2 0 00-2 2v2a1 1 0 01-1 1H5.87a1 1 0 01-1-1v-2a2 2 0 00-2-2H1a3 3 0 013-3h16a3 3 0 013 3z'
					opacity={0.3}
				/>
				<path d='M23 10v5a3 3 0 01-3 3H4a3 3 0 01-3-3v-5h1.87v2a3 3 0 003 3h12.304a3 3 0 003-3v-2H23z' />
			</g>
		</svg>
	);
};

export default SvgCouch;
