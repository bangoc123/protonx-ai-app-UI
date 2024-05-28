import React, { SVGProps } from 'react';

const SvgGit2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={5} y={8} width={2} height={8} rx={1} />
				<path
					d='M6 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={17} y={8} width={2} height={8} rx={1} />
				<path
					d='M18 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM6 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM18 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGit2;
