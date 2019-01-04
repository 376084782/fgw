const breadcurmb = {
  state: {
    list: []
  },
  mutations: {},
  actions: {
    updateBreadCurmbList({ state }, list) {
      state.list = list;
    }
  },
  getters: {
    breadcurmbList: state => state.list
  }
};
export default breadcurmb;
