import React, { SVGProps } from 'react';

const SvgGit1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={11} y={8} width={2} height={9} rx={1} />
				<path
					d='M12 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM12 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGit1;
