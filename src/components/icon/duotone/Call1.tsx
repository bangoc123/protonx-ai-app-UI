import React, { SVGProps } from 'react';

const SvgCall1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.915 14.143l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.8.13l1.105 2.208a4.387 4.387 0 01-.822 5.064l-5.999 6a5.427 5.427 0 01-5.554 1.31l-2.414-.805a.5.5 0 01-.195-.828l2.65-2.65a2 2 0 012.31-.375l.25.124a2 2 0 002.308-.374z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCall1;
