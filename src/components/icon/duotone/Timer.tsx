import React, { SVGProps } from 'react';

const SvgTimer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M12 21a8 8 0 110-16 8 8 0 010 16z' fill='currentColor' opacity={0.3} />
				<path
					d='M13 5.062a8.079 8.079 0 00-2 0V4h-1a1 1 0 110-2h4a1 1 0 010 2h-1v1.062zM16.71 6.533l.826-.826a1 1 0 011.414 1.414l-.783.783a8.047 8.047 0 00-1.457-1.371zM11.963 7.5h.074a.5.5 0 01.499.462l.423 5.5a.5.5 0 01-.499.538h-.92a.5.5 0 01-.499-.538l.423-5.5a.5.5 0 01.499-.462z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTimer;
