import React, { SVGProps } from 'react';

const SvgShift = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18.669 12H15v6H9v-6H5.326l6.666-6.672L18.67 12zM7 14v5a1 1 0 001 1h8a1 1 0 001-1v-5h4.688a.75.75 0 00.53-1.28l-9.696-9.69a.75.75 0 00-1.061 0l-9.682 9.69A.75.75 0 002.31 14H7z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgShift;
