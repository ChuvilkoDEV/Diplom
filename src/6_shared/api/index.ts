import axios from 'axios';

const api = axios.create({
  baseURL: 'http://212.233.90.56:8081',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавим интерцептор для авторизации, если нужно
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
