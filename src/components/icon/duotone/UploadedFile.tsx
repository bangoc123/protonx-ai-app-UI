import React, { SVGProps } from 'react';

const SvgUploadedFile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M8.951 13.815h1.957v2.008a.5.5 0 00.5.5h1.023a.5.5 0 00.5-.5v-2.008h1.957a.5.5 0 00.381-.823l-2.968-3.505a.5.5 0 00-.763 0L8.57 12.992a.5.5 0 00.381.823z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUploadedFile;
