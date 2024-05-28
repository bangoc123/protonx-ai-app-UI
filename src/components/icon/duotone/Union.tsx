import React, { SVGProps } from 'react';

const SvgUnion = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 9V6.182C8 4.768 8.768 4 10.182 4h7.636C19.232 4 20 4.768 20 6.182v7.636C20 15.232 19.232 16 17.818 16H15v2.818C15 20.232 14.232 21 12.818 21H5.182C3.768 21 3 20.232 3 18.818v-7.636C3 9.768 3.768 9 5.182 9H8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUnion;
