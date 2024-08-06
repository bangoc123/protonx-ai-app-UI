import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function postLangChainQuestionsApiCall(data: {
	dataToPost: {
		messages: IChat[];
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `https://localhost:5001/chat`,
		data: dataToPost,
	});
}
