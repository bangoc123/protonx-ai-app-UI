import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function generateImageApiCall(data: {
	dataToPost: {
		prompt: string;
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `${HOST}${AI_DEMOS_URI}/generate-image`,
		data: dataToPost,
	});
}
