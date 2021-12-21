import ReviewService from '@/services/review-service';

export const state = {
  coffeeReviews: [],
  visitorReviews: [],
};

export const actions = {
  async fetchAllCoffeeReviews({ commit }) {
    ReviewService.getReviews('coffee').then((response) => {
      commit('ADD_ALL_COFFEE_REVIEWS', response.data);
    });
  },
  async fetchAllVisitorReviews({ commit }) {
    ReviewService.getReviews('visitor').then((response) => {
      commit('ADD_ALL_VISITOR_REVIEWS', response.data);
    });
  },
};

export const mutations = {
  ADD_ALL_COFFEE_REVIEWS(state, reviews) {
    state.coffeeReviews = reviews;
  },
  ADD_ALL_VISITOR_REVIEWS(state, reviews) {
    state.visitorReviews = reviews;
  },
};

export const getters = {
  getVerifiedCoffeeReviews(state) {
    return state.coffeeReviews.filter((review) => review.verified === true);
  },
  getUnverifiedCoffeeReviews(state) {
    return state.coffeeReviews.filter((review) => review.verified === false);
  },
  getVerifiedVisitorReviews(state) {
    return state.visitorReviews.filter((review) => review.verified === true);
  },
  getUnverifiedVisitorReviews(state) {
    return state.visitorReviews.filter((review) => review.verified === false);
  },
  getAllUnverifiedReviews(state) {
    const coffee = state.coffeeReviews.filter((review) => review.verified === false);
    const visitor = state.visitorReviews.filter((review) => review.verified === false);
    return [...coffee, ...visitor];
  },
};
