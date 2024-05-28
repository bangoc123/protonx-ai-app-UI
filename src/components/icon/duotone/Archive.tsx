import React, { SVGProps } from 'react';

const SvgArchive = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.5 3h15A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3zM8 5a1 1 0 100 2h8a1 1 0 000-2H8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArchive;
