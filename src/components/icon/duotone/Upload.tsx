import React, { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M2 13c0-.5.5-1 1-1s1 .5 1 1v5a2 2 0 002 2h12a2 2 0 002-2v-5a1 1 0 012 0v5a4 4 0 01-4 4H6a4 4 0 01-4-4v-5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect fill='currentColor' opacity={0.3} x={11} y={2} width={2} height={14} rx={1} />
				<path
					d='M12.036 3.378l-4.329 4.33a1 1 0 01-1.414-1.415l5-5a1 1 0 011.376-.036l5 4.5a1 1 0 11-1.338 1.486l-4.295-3.865z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUpload;
