import React, { SVGProps } from 'react';

const SvgRangeHood = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9 13h6l5.447 2.724a1 1 0 01.553.894V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-3.382a1 1 0 01.553-.894L9 13zm1-11h4-4zm8 17a1 1 0 100-2 1 1 0 000 2zm-3 0a1 1 0 100-2 1 1 0 000 2zm-3 0a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
				<path
					d='M9 13V3a1 1 0 011-1h4a1 1 0 011 1v10H9z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRangeHood;
