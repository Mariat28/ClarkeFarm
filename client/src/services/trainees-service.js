import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getTrainees() {
    return apiClient.get('/api/trainees');
  },
  postTrainee(booking) {
    return apiClient.post('/api/trainees', booking);
  },
  delete(id) {
    return apiClient.delete(`/api/trainees/delete/${id}`);
  },
};
