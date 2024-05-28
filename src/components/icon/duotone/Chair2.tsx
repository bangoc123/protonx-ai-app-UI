import React, { SVGProps } from 'react';

const SvgChair2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.542 21.501l1.599-5.964a1 1 0 111.931.518l-1.598 5.964a1 1 0 01-1.932-.518zm10.908-.03a1 1 0 01-1.932.518l-1.303-4.863a1 1 0 011.932-.517l1.303 4.862z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.36 1h9.28a2 2 0 011.972 2.329l-1.542 9.253a.5.5 0 01-.494.418H7.424a.5.5 0 01-.494-.418L5.388 3.33A2 2 0 017.361 1zM5.5 14h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgChair2;
