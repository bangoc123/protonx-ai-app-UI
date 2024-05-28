import React, { SVGProps } from 'react';

const SvgSpoon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M9.4 12.9l.7.7c.4.4.4 1 0 1.4l-5 5c-.4.4-1 .4-1.4 0l-.7-.7c-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0z'
				opacity={0.3}
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
			<path
				d='M19.3 3.7c-1.8-1.8-6.4 0-8.1 1.8-1.8 1.8-1.8 4.6 0 6.4 1.8 1.8 4.6 1.8 6.4 0 1.7-1.8 3.4-6.4 1.7-8.2zm-2.8 6.7c-1 1-2.6 1.1-3.7.2l4.8-5.1c1 1.1-.1 3.8-1.1 4.9z'
				fill='currentColor'
			/>
			<path
				d='M12.8 10.6c1.1.9 2.7.8 3.7-.2s2.1-3.8 1.1-4.9l-4.8 5.1z'
				fill='currentColor'
				opacity={0.3}
			/>
		</svg>
	);
};

export default SvgSpoon;
