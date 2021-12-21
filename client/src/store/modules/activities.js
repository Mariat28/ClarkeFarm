import ActivityService from '@/services/activity-service';

export const state = {
  activities: [],
};

export const actions = {
  async fetchAllActivities({ commit }) {
    const activities = await ActivityService.getActivities();
    commit('ADD_ALL_ACTIVITIES', activities.data);
  },
  deleteActivity({ commit }, payload) {
    commit('REMOVE_ACTIVITY', payload);
  },
  addActivity({ commit }, payload) {
    commit('ADD_ACTIVITY', payload);
  },
};

export const mutations = {
  ADD_ALL_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
  REMOVE_ACTIVITY(state, payload) {
    const arr = [...state.activities];
    state.activities = arr.filter((activity) => activity._id !== payload._id);
  },
  ADD_ACTIVITY(state, payload) {
    state.activities.push(payload);
  },
};
