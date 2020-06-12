import { Promise } from 'es6-promise'

export default {
  LOGIN({ commit }, { type, request }) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`${type}/login`, request)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
  },

  REGISTER({ commit }, { type, request }) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`${type}/register`, request)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  UPDATE_BOOL({ commit }, data) {
    commit('UPDATE_BOOL_DATA', data);
  },

  UPDATE_USER({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/auth/update', data).then(response => {
        commit('UPDATE_USER_DATA', response);
        resolve();
      }).catch(error => reject(error));
    })
  },

  UPDATE_ABYSS({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/abyss/update', data).then(response => {
        commit('UPDATE_ABYSS_DATA', response);
        resolve();
      }).catch(error => reject(error));
    })
  },

  LOGOUT_ABYSS({ commit },) {
    commit('LOGOUT_ABYSS')
  },

  LOGOUT_USER({ commit }) {
    commit('LOGOUT_USER')
  }
}
