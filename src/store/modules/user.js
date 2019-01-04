const userInfo = {
  state: {
  },
  mutations: {
    setAccess(state, access) {
    },
  },
  actions: {
    logout({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('setToken', {
          token: ''
        })
        commit('setAccess', '')
        commit('setHasGetInfo', false)
        resolve()
      })
    },
  },
  getters: {
  }
}
export default userInfo;