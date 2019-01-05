import Vue from "vue";
import App from "./App.vue";
import store from "@/store/";
import "@/plugins/element.js";
import router from "@/router/";
// 引入重置样式的css
import "@/assets/css/index.js";
/**引入自定义公共组件 */
import Common from "@/components/common/main.js";

/**如果需要设配移动端，引入计算rootFontSize的这个模块 */
// import '@/libs/screen-apdator.js'

Vue.use(Common);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
