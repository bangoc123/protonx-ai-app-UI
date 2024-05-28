import React, { SVGProps } from 'react';

const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path opacity={0.3} d='M0 0h24v24H0z' />
				<path fill='currentColor' opacity={0.3} d='M7 4.895V21H5V3h6v1.895z' />
				<path
					d='M10.178 2.247l8 1.45a1 1 0 01.822.984v14.638a1 1 0 01-.822.984l-8 1.45A1 1 0 019 20.769V3.23a1 1 0 011.178-.984zm1.739 10.659c.69 0 1.25-.608 1.25-1.359 0-.75-.56-1.359-1.25-1.359s-1.25.608-1.25 1.359c0 .75.56 1.359 1.25 1.359z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDoorOpen;
