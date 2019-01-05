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
const QLSX = resolve => {
  spinRoute.show();
  require(["@/view/manager/qlsxsl/index.vue"], spinRoute.resolve(resolve));
};
const QLSXDetail = resolve => {
  spinRoute.show();
  require(["@/view/manager/qlsxsl/detail.vue"], spinRoute.resolve(resolve));
};
const XMXX = resolve => {
  spinRoute.show();
  require(["@/view/manager/xmxx/index.vue"], spinRoute.resolve(resolve));
};
const QLSXBLDetail = resolve => {
  spinRoute.show();
  require(["@/view/manager/qlsxsl/blDetail.vue"], spinRoute.resolve(resolve));
};
const QLSXBLEdit = resolve => {
  spinRoute.show();
  require(["@/view/manager/qlsxsl/edit.vue"], spinRoute.resolve(resolve));
};

export default [{
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
    redirect: '/QLSX',
    meta: {
      title: "主页"
    },
    component: Main,
    children: [{
      name: "QLSX",
      path: "/QLSX",
      component: QLSX,
    }, {
      name: "QLSXBLDetail",
      path: "/QLSXBLDetail",
      component: QLSXBLDetail,
    }, {
      name: "QLSXDetail",
      path: "/QLSXDetail",
      component: QLSXDetail,
    }, {
      name: "XMXX",
      path: "/XMXX",
      component: XMXX,
    }, {
      name: "QLSXBLEdit",
      path: "/QLSXBLEdit",
      component: QLSXBLEdit,
    }]
  }
];