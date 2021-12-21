import TrainingService from '@/services/training-service';

export const state = {
  trainings: [],
};

export const actions = {
  async fetchAllTrainings({ commit }) {
    const trainings = await TrainingService.getTrainings();
    commit('ADD_ALL_TRAININGS', trainings.data);
  },
  deleteTraining({ commit }, payload) {
    commit('REMOVE_TRAINING', payload);
  },
  addTraining({ commit }, payload) {
    commit('ADD_TRAINING', payload);
  },
};

export const mutations = {
  ADD_ALL_TRAININGS(state, trainings) {
    state.trainings = trainings;
  },
  REMOVE_TRAINING(state, payload) {
    const arr = [...state.trainings];
    state.trainings = arr.filter((training) => training._id !== payload._id);
  },
  ADD_TRAINING(state, payload) {
    state.trainings.push(payload);
  },
};
