import React, { SVGProps } from 'react';

const SvgRightCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={10} />
				<path
					d='M9.322 7.463a.857.857 0 011.213-1.212l5.143 5.143a.857.857 0 01.025 1.185l-4.714 5.143a.857.857 0 11-1.264-1.158l4.16-4.538-4.563-4.563z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRightCircle;
