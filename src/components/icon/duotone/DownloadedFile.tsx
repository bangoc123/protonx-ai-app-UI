import React, { SVGProps } from 'react';

const SvgDownloadedFile = (props: SVGProps<SVGSVGElement>) => {
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
					d='M14.888 11.83H12.93V9.824a.5.5 0 00-.5-.5h-1.023a.5.5 0 00-.5.5v2.008H8.95a.5.5 0 00-.381.823l2.968 3.505a.5.5 0 00.763 0l2.968-3.505a.5.5 0 00-.381-.823z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDownloadedFile;
