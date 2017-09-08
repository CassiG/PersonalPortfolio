import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'efhrnelif0xn';
const API_TOKEN = '7f25db21e88319ea38778825a5db5113a3e2291187b9c8db75ea4d914315a116';

export function fetchPosts() {
  const request = axios.get('${API_BASE_URL}'/spaces/'${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post');
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
