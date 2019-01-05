// 引入自定义组件
import pagination from './pagination.vue'
const Common = {
  install: function (Vue) {
    Vue.component('pagination', pagination)
  }
}
// 导出
export default Common