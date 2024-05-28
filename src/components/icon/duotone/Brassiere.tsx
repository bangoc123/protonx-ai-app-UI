import React, { SVGProps } from 'react';

const SvgBrassiere = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.5 14c0-2.761 3.239-6 6-6s5 1.239 5 4a5 5 0 01-5 5c-1.844 0-3.902-.106-5.065-1h-2.37c-1.163.894-3.22 1-5.065 1a5 5 0 01-5-5c0-2.761 2.239-4 5-4s6 3.239 6 6h.5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBrassiere;
