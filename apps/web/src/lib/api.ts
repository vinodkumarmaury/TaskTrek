import axios from 'axios';

export const api = axios.create({
  baseURL:'https://tasktrek-d3bz.onrender.com/api',
  withCredentials: true,
});

// Add token to requests automatically
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
