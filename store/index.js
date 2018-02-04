import Vuex from 'vuex';

import user from './user';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user,
    },

    actions: {
      async nuxtServerInit({ dispatch }, { req }) {
        global.document = {};
        global.document.cookie = req.headers.cookie;
        // We need to wait until attributes updated, because once page
        // is rendered - changes to store from the server won't affect
        // client side store
        await dispatch('refreshUser');
      },
    },
  });
};

export default createStore;
