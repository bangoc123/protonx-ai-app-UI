import React, { SVGProps } from 'react';

const SvgUnderline = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.12 19.16c-3.34 0-5.72-2.18-5.72-5.68V4.8h2.32v8.74c0 2.2 1.38 3.42 3.4 3.42s3.38-1.22 3.38-3.42V4.8h2.32v8.68c0 3.5-2.36 5.68-5.7 5.68z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={4} y={21} width={16} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgUnderline;
