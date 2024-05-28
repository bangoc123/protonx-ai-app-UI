import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function postSmartHrApiCall(data: {
	dataToPost: {
		title: string;
		lang: string;
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `${HOST}${AI_DEMOS_URI}/generate-jd`,
		data: dataToPost,
	});
}
