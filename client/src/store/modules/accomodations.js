import AccomodationService from '@/services/accomodation-service';

export const state = {
  accomodations: [],
};

export const actions = {
  async fetchAllAccomodations({ commit }) {
    const accomodation = await AccomodationService.getAccomodations();
    commit('ADD_ALL_ACCOMODATIONS', accomodation.data);
  },
  deleteAccomodation({ commit }, payload) {
    commit('REMOVE_ACCOMODATION', payload);
  },
  addAccomodation({ commit }, payload) {
    commit('ADD_ACCOMODATION', payload);
  },
};

export const mutations = {
  ADD_ALL_ACCOMODATIONS(state, accomodations) {
    state.accomodations = accomodations;
  },
  REMOVE_ACCOMODATAION(state, payload) {
    const arr = [...state.accomodations];
    state.accomodations = arr.filter((accomodation) => accomodation._id !== payload._id);
  },
  ADD_ACCOMODATION(state, payload) {
    state.accomodations.push(payload);
  },
};
