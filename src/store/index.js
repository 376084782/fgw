import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import breadcurmb from "./modules/breadcurmb";
import menu from "./modules/menu";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    breadcurmb,
    menu,
  }
});
