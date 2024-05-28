'use client';

import React from 'react';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/ui/Dropdown';
import Button from '../../../../components/ui/Button';
import ButtonGroup from '../../../../components/ui/ButtonGroup';
import DARK_MODE from '../../../../constants/darkMode.constant';
import useFontSize from '../../../../hooks/useFontSize';
import useDarkMode from '../../../../hooks/useDarkMode';

const SettingsPartial = () => {
	const { fontSize, setFontSize } = useFontSize();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button icon='HeroCog8Tooth' aria-label='Settings' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				<DropdownItem className='flex flex-col !items-start'>
					<div>Font Size:</div>
					<ButtonGroup>
						<Button
							icon='HeroMinus'
							onClick={() => setFontSize(fontSize - 1)}
							isDisable={fontSize <= 12}
						/>
						<Button isDisable>{fontSize}</Button>
						<Button
							icon='HeroPlus'
							onClick={() => setFontSize(fontSize + 1)}
							isDisable={fontSize >= 18}
						/>
					</ButtonGroup>
				</DropdownItem>
				<DropdownItem className='flex flex-col !items-start'>
					<div>Dark Mode:</div>
					<ButtonGroup>
						<Button
							icon='HeroMoon'
							onClick={() => setDarkModeStatus(DARK_MODE.DARK)}
							isActive={darkModeStatus === DARK_MODE.DARK}
						/>
						<Button
							icon='HeroSun'
							onClick={() => setDarkModeStatus(DARK_MODE.LIGHT)}
							isActive={darkModeStatus === DARK_MODE.LIGHT}
						/>
						<Button
							icon='HeroComputerDesktop'
							onClick={() => setDarkModeStatus(DARK_MODE.SYSTEM)}
							isActive={darkModeStatus === DARK_MODE.SYSTEM}
						/>
					</ButtonGroup>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default SettingsPartial;
