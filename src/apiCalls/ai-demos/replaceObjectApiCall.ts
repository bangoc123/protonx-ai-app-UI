import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function replaceObjectApiCall(data) {
    const { dataToPost } = data;
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/replace-object',
        data: dataToPost,
    });
}