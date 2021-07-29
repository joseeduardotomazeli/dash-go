import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://dash-go-joseeduardotomazeli.vercel.app/api';

const api = axios.create({
  baseURL,
});

export default api;
