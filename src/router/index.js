import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import store from "@/store";
const LOGIN_PAGE_PATH = "/login";
const HOME_PAGE_PATH = "/home";

import { setToken, getToken } from "@/libs/util";

Vue.use(Router);
const router = new Router({
  routes,
  mode: "hash"
});

router.beforeEach((to, from, next) => {
  const token = getToken();
  console.log('token',token)
  if (!token && to.meta.noLogin) {
    // 未登录且要跳转的页面不需要登录
    next(); // 跳转
  } else if (!token) {
    // 未登陆且要跳转的页面需要登录
    next({ path: LOGIN_PAGE_PATH }); // 跳转到登录页
  } else if (token && to.meta.noLogin) {
    // 已登录且要跳转的页面不需要登录
    // 跳到首页
    next({ path: HOME_PAGE_PATH });
  } else {
    // 已登录且要跳转的页面需要登录
    
    next();
    // store
    //   .dispatch("getUserInfo")
    //   .then(user => {
    //     store.dispatch("updateMenuList");
    //   })
    //   .catch(() => {
    //     // 回到登录
    //     setToken("");
    //     next({ path: LOGIN_PAGE_PATH });
    //   });
  }
});

export default router;
