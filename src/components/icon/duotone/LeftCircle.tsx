import React, { SVGProps } from 'react';

const SvgLeftCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={12} cy={12} r={10} />
				<path
					d='M14.678 7.463a.857.857 0 00-1.213-1.212l-5.143 5.143a.857.857 0 00-.025 1.185l4.714 5.143a.857.857 0 101.264-1.158l-4.16-4.538 4.563-4.563z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgLeftCircle;
