import React, { SVGProps } from 'react';

const SvgWasher = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6 4a1 1 0 00-1 1v3h14V5a1 1 0 00-1-1H6zm0-2h12a3 3 0 013 3v15a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3zm6 19.5a6 6 0 100-12 6 6 0 000 12zM7 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
				<path d='M12 19.5a4 4 0 100-8 4 4 0 000 8z' fill='currentColor' opacity={0.3} />
			</g>
		</svg>
	);
};

export default SvgWasher;
