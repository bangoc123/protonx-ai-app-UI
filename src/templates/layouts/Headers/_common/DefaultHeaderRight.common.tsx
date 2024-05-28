import React from 'react';
import Mounted from '@/components/Mounted';
import Button from '@/components/ui/Button';
import NotificationPartial from '../_partial/Notification.partial';
import SettingsPartial from '../_partial/Settings.partial';
import LanguageSelectorPartial from '../_partial/LanguageSelector.partial';
import MessagesPartial from '../_partial/Messages.partial';

const DefaultHeaderRightCommon = () => {
	return (
		<>
			{/* <MessagesPartial />
			<NotificationPartial /> */}
			<SettingsPartial />
			<Mounted
				fallback={<Button icon='HeroLanguage' aria-label='Select Language' isDisable />}>
				<LanguageSelectorPartial />
			</Mounted>
		</>
	);
};

export default DefaultHeaderRightCommon;
