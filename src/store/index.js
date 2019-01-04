import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import breadcurmb from "./modules/breadcurmb";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    breadcurmb
  }
});
