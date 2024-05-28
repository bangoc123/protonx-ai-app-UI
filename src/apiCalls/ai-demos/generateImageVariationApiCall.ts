import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function generateImageVariationApiCall(data: {
	dataToPost: {
		base64: string;
	};
}) {
	const { dataToPost } = data;
	return axios({
		method: 'post',
		url: `${HOST}${AI_DEMOS_URI}/generate-image-variation`,
		data: dataToPost,
	});
}
