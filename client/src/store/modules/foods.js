import FoodService from '@/services/food-service';

export const state = {
  foods: [],
};

export const actions = {
  async fetchAllFoods({ commit }) {
    const food = await FoodService.getFoods();
    commit('ADD_ALL_FOODS', food.data);
  },
  deleteFood({ commit }, payload) {
    commit('REMOVE_FOOD', payload);
  },
  addFood({ commit }, payload) {
    commit('ADD_FOOD', payload);
  },
};

export const mutations = {
  ADD_ALL_FOODS(state, foods) {
    state.foods = foods;
  },
  REMOVE_FOOD(state, payload) {
    const arr = [...state.foods];
    state.foods = arr.filter((food) => food._id !== payload._id);
  },
  ADD_FOOD(state, payload) {
    state.foods.push(payload);
  },
};
