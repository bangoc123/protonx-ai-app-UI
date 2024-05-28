import React, { FC } from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import Image, { StaticImageData } from 'next/image';
import getFirstLetter from '../utils/getFirstLetter';
import themeConfig from '../config/theme.config';

interface IAvatarProps {
	src?: string | StaticImageData;
	name?: string;
	className?: string;
	rounded?: TRounded;
}
const Avatar: FC<IAvatarProps> = (props) => {
	const { src, name, className, rounded = 'rounded-full', ...rest } = props;

	const sharedClass = classNames('aspect-square w-12', className, rounded);

	if (src) {
		return (
			<Image
				src={src}
				alt={name || 'Avatar'}
				className={classNames('object-cover', sharedClass)}
				{...rest}
			/>
		);
	}
	return (
		<div
			className={classNames(
				'flex items-center justify-center font-bold',
				`bg-${themeConfig.themeColor}-${themeConfig.themeColorShade}/10`,
				`text-${themeConfig.themeColor}-${themeConfig.themeColorShade}`,
				sharedClass,
			)}>
			{getFirstLetter(name || 'Anonymous')}
		</div>
	);
};

export default Avatar;
