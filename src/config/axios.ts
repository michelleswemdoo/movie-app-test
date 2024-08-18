import axios from 'axios';

// create an axios instance

export const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
});
