import React, { SVGProps } from 'react';

const SvgHummer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18.425 12.646l2.828-2.828a.5.5 0 01.707 0l.707.707a.5.5 0 010 .707l-2.828 2.829a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.708zM3.222 17.95l9.9-9.9a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.415l-9.9 9.9a1 1 0 01-1.414 0l-1.414-1.415a1 1 0 010-1.414z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.586 4.515a5 5 0 017.07 0l3.183 3.182a.5.5 0 010 .707l-2.829 2.828a.5.5 0 01-.707 0L9.586 4.515z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgHummer;
