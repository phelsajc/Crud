import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.70.98:8083/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer ".concat(localStorage.getItem('token')),
  },
});

export default {
  get(url) {
    return apiClient.get(url);
  },
  post(url,data) {
    return apiClient.post(url, data);
  },
  update(id, data) {
    return apiClient.put(`/items/${id}`, data);
  },
  delete(url) {
    return apiClient.delete(url);
  },
};
