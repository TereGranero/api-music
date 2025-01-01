import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://glorious-robot-94wp4q99rrqhxw5p-3000.app.github.dev/', 
  timeout: 5000,                    
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Server Error:', error);
    return Promise.reject(error);
  }
);

export default httpClient;