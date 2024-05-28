import React, { SVGProps } from 'react';

const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm12 11a4 4 0 100-8 4 4 0 000 8z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20.619 7.098A1.998 1.998 0 0020 7h-2.799L8.013 1.873A1 1 0 118.987.127l11.125 6.207a.999.999 0 01.507.764zM16 16a2 2 0 100-4 2 2 0 000 4z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={4} y={11} width={5} height={2} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={4} y={15} width={5} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgRadio;
