import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/const';

function fetchImages(query, page) {
  try {
    const response = axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchImages;
