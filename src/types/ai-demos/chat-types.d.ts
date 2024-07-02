interface IChat {
	content: string;
	role: string;
}

interface ChatPart {
	text: String
}

interface GoogleChat {
	role: string;
	parts: Array<ChatPart>;
}
