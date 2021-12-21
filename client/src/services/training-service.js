import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getTrainings() {
    return apiClient.get('/api/trainings');
  },
  postTraining(training) {
    return apiClient.post('/api/trainings', training);
  },
  deleteTraining(id) {
    return apiClient.delete(`/api/trainings/delete/${id}`);
  },
};
