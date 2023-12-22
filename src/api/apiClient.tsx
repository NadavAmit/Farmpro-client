import axios from 'axios';

const baseURL = 'http://localhost:8080/api/'; 

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      // Add any headers you need for every request
    },
  });

  export default apiClient;
