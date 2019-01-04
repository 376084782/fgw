import spinRoute from "./pageLoader";
const Login = resolve => {
  spinRoute.show();
  require(["@/page/login/login.vue"], spinRoute.resolve(resolve));
};
const Forget = resolve => {
  spinRoute.show();
  require(["@/page/forget/forget.vue"], spinRoute.resolve(resolve));
};
const Main = resolve => {
  spinRoute.show();
  require(["@/page/main/main.vue"], spinRoute.resolve(resolve));
};
// const stockSummary = resolve => {
//   spinRoute.show();
//   require(["@/page/stock/summary/summary.vue"], spinRoute.resolve(resolve));
// };
export default [
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      noLogin: true
    }
  },
  {
    name: "forget",
    path: "/forget",
    component: Forget,
    meta: {
      title: "忘记密码",
      noLogin: true
    }
  },
  {
    name: "_home",
    path: "/",
    meta: {
      title: "主页"
    },
    component: Main,
    children: [
      // {
      //   name: "stockSummary",
      //   path: "/stockSummary",
      //   components: {
      //     default: stockSummary
      //   },
      //   meta: {
      //     title: "库存概况"
      //   }
      // }
    ]
  }
];
