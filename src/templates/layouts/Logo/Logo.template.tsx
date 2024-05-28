import React, { FC, HTMLAttributes } from 'react';
import colors from 'tailwindcss/colors';
import Image from 'next/image';
import useDarkMode from '@/hooks/useDarkMode';
import { PROTONX_LOGO } from '@/constant';
import themeConfig from '../../../config/theme.config';

type ILogoTemplateProps = HTMLAttributes<HTMLOrSVGElement>;
const LogoTemplate: FC<ILogoTemplateProps> = (props) => {
	const { isDarkTheme } = useDarkMode();
	const { ...rest } = props;
	return (
		<Image
			src={isDarkTheme ? PROTONX_LOGO?.DARK : PROTONX_LOGO?.LIGHT}
			className='App-logo'
			alt='logo-protonx'
			width='90'
			height='65'
		/>
	);
};

export default LogoTemplate;
