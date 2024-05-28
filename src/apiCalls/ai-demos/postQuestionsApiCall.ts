import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function postQuestionsApiCall(data: {
	dataToPost: {
		questions: IChat[];
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `${HOST}${AI_DEMOS_URI}/chat`,
		data: dataToPost,
	});
}
