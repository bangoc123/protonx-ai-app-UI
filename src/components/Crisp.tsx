'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
	useEffect(() => {
		Crisp.configure('8259c130-f884-4738-86d2-cdc354205e80');
	});

	return null;
};

export default CrispChat;
