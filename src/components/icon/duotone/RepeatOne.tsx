import React, { SVGProps } from 'react';

const SvgRepeatOne = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21.997 12.193A6 6 0 0116 18h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16H16a4 4 0 003.651-2.365 6.5 6.5 0 002.346-1.442z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.1 6A5.002 5.002 0 0122 7a5 5 0 01-9.9 1H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4.1zm4.63-.332V9.5h.96v-5h-.872L15.05 5.924l.56.664 1.12-.92z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRepeatOne;
