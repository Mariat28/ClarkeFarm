import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getReviews(type) {
    return apiClient.get(`/api/reviews/${type}`);
  },
  postReview(type, review) {
    return apiClient.post(`/api/reviews/${type}`, review);
  },
  delete(type, id) {
    return apiClient.delete(`/api/reviews/delete/${type}/${id}`);
  },
  update(type, id) {
    return apiClient.put(`/api/reviews/update/${type}/${id}`, { verified: true });
  },
};
