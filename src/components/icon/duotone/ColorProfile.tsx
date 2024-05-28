import React, { SVGProps } from 'react';

const SvgColorProfile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 11a5 5 0 110 8 5 5 0 110-8zm1.334 1.504c.423.735.666 1.587.666 2.496s-.243 1.761-.666 2.496a3 3 0 100-4.991z'
					fill='currentColor'
					opacity={0.3}
				/>
				<circle fill='currentColor' cx={12} cy={9} r={5} />
			</g>
		</svg>
	);
};

export default SvgColorProfile;
