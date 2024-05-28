import React, { SVGProps } from 'react';

const SvgEdit = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M20.504 10.424l-9.56 10.107a1.5 1.5 0 01-1.09.469H5.5A1.5 1.5 0 014 19.5v-4.393c0-.39.152-.763.423-1.043l9.659-9.97a1.5 1.5 0 012.138-.016l4.255 4.254a1.5 1.5 0 01.029 2.092z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgEdit;
