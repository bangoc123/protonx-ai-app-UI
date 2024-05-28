import React, { SVGProps } from 'react';

const SvgLayers = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.934 16.072l6.426-5.116.158-.125a1.5 1.5 0 00.003-2.35l-6.587-5.238a1.5 1.5 0 00-1.868 0L4.475 8.485a1.5 1.5 0 00-.001 2.347l.156.124 6.436 5.117a1.5 1.5 0 001.868 0z'
					fill='currentColor'
				/>
				<path
					d='M11.056 18.67l-5.72-4.547a.903.903 0 00-1.276.154.91.91 0 00.166 1.279l6.861 5.247a1.5 1.5 0 001.823 0l6.858-5.243a.915.915 0 00.167-1.288.91.91 0 00-1.286-.155l-5.725 4.554a1.5 1.5 0 01-1.868 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgLayers;
