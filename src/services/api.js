// services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getRestaurantData = async () => {
  const response = await axios.get(`${BASE_URL}/restaurant`);
  return response.data;
};
