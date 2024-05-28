import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function postSpeechToTextApiCall(data: {
	dataToPost: {
		buffer: Buffer;
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `${HOST}${AI_DEMOS_URI}/speech-to-text`,
		data: dataToPost,
	});
}
