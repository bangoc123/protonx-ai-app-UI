import React, { SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M12 22a9 9 0 110-18 9 9 0 010 18z' fill='currentColor' opacity={0.3} />
				<path
					d='M11.963 7.5h.085a.5.5 0 01.497.45L13 12.5l3.248 1.856a.5.5 0 01.252.434V15a.382.382 0 01-.482.368l-4.62-1.26a.5.5 0 01-.366-.52l.432-5.626a.5.5 0 01.499-.462z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgClock;
