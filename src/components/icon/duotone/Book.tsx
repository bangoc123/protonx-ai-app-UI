import React, { SVGProps } from 'react';

const SvgBook = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='svg-icon'
			{...props}>
			<defs>
				<path
					d='M20 18H8a1 1 0 000 2h12v1c0 .627-.358 1-1 1H7c-1.746 0-3-1.306-3-3V5c0-1.694 1.254-3 3-3h12c.642 0 1 .373 1 1v15z'
					id='book_svg__a'
				/>
			</defs>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<use fill='currentColor' xlinkHref='#book_svg__a' />
			</g>
		</svg>
	);
};

export default SvgBook;
