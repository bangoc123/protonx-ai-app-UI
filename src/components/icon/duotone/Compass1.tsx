import React, { SVGProps } from 'react';

const SvgCompass1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a9 9 0 110-18 9 9 0 010 18zm2.165-13.645l-4.554 3.007a.5.5 0 00-.224.388l-.327 5.448a.5.5 0 00.775.447l4.554-3.007a.5.5 0 00.224-.388l.327-5.448a.5.5 0 00-.775-.447z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCompass1;
