import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/const';

function fetchImages(searchQuery, page) {
  const response = axios.get(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response;
}

export default fetchImages;
