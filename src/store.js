import Vue from "vue";
import Vuex from "vuex";
import UserService from "./services/userService";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    users: [],
    albums: [],
    photos: []
  },
  mutations: {
    getItems(state, {
      key,
      items
    }) {
      state[key] = items;
    }
  },
  actions: {
    async getUsers({
      commit
    }) {
      const {
        data: items
      } = await UserService.getUsers();
      commit("getItems", {
        key: 'users',
        items
      });
    },
    async getAlbums({
      commit
    }, userId) {
      const {
        data: items
      } = await UserService.getAlbums(userId);
      commit("getItems", {
        key: 'albums',
        items
      });
    },
    async getPhotos({
      commit
    }, userId) {
      const {
        data: items
      } = await UserService.getPhotos(userId);
      commit("getItems", {
        key: 'photos',
        items
      });
    },
  },
  plugins: [
    createPersistedState()
  ]
});