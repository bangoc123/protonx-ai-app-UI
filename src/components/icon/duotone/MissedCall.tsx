import React, { SVGProps } from 'react';

const SvgMissedCall = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.586 8L5.172 6.586a1 1 0 111.414-1.414L8 6.586l1.414-1.414a1 1 0 111.414 1.414L9.414 8l1.414 1.414a1 1 0 11-1.414 1.414L8 9.414l-1.414 1.414a1 1 0 11-1.414-1.414L6.586 8z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M13.08 14.784l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.801.13l1.104 2.208a4.387 4.387 0 01-.822 5.065l-5.999 5.998a5.427 5.427 0 01-5.553 1.311l-2.415-.804a.5.5 0 01-.195-.828l2.65-2.652a2 2 0 012.31-.374l.25.125a2 2 0 002.308-.375z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMissedCall;
