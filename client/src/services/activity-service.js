import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getActivities() {
    return apiClient.get('/api/activities');
  },
  postActivity(activity) {
    return apiClient.post('/api/activities', activity);
  },
  deleteActivity(id) {
    return apiClient.delete(`/api/activities/delete/${id}`);
  },
};
