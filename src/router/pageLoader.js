import {
  Loading
} from 'element-ui';

var unique;
export default {
  show() {
    let opt = {
      lock: true,
      text: "请稍后",
      background: "rgba(0, 0, 0, 0.7)"
    };
    if (!unique) unique = Loading.service(opt);
  },
  resolve(resolve) {
    return function (component) {
      if (unique) {
        unique.close();
        unique = null;
      }
      resolve(component)
    }
  }
}