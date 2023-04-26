import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/const';

axios.defaults.baseURL = BASE_URL;

const fetchImages = (searchQuery, page) => {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };

  return axios.get('/', { params });
};

export default fetchImages;
