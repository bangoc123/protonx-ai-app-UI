import axios from 'axios';
import { AI_DEMOS_URI, HOST } from '@/constant';

export function sketchToImageApiCall(data) {
    const { dataToPost } = data;
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/sketch-to-image',
        data: dataToPost,
    });
}