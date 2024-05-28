import React, { SVGProps } from 'react';

const SvgUserFolder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12 13a2 2 0 110-4 2 2 0 010 4zM7 18.5c.216-2.983 2.368-4.5 4.99-4.5 2.66 0 4.846 1.433 5.009 4.5.006.122 0 .5-.418.5H7.404c-.14 0-.415-.338-.404-.5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgUserFolder;
