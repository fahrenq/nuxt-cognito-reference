import actions from './actions';

export default {
  state: {
    user: null,
  },

  getters: {
    user(state) {
      return state.user;
    },
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setUserAttributes(state, payload) {
      state.user.attributes = payload;
    },

    clearUser(state) {
      state.user = null;
    },
  },

  actions,
};
