import axios from 'axios';
import { HOST } from '@/constant';

export function postRAGQuestionsApiCall(data: { dataToPost: [];}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `http://localhost:5002/api/search`,
		data: dataToPost,
	});
}
