import React, { SVGProps } from 'react';

const SvgSend = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 13.5L19 12 3 10.5V3.773a.5.5 0 01.705-.456l18.282 8.227a.5.5 0 010 .912L3.705 20.683A.5.5 0 013 20.227V13.5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSend;
