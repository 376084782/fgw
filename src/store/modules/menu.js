// import {
//   updateMenu
// } from '@/api/user'

function formatData(data) {
  let res = [];
  data.forEach(item => {
    let data = {
      title: item.funName
    }
    if (item.functionList) {
      data.subMenu = formatData(item.functionList);
    } else if (item.url) {
      data.path = item.url;
    }
    res.push(data)
  })
  return res;
}
const menuList = {
  state: {
    list: [{
      title: '项目管理',
      icon: 'home-fill',
      subMenu: [{
        title: '权力事项受理',
        path: '/QLSX'
      }, {
        title: '项目信息查询',
        path: '/XMXX'
      }, {
        title: '备案录入',
        path: '/no'
      }, {
        title: '权力事项受理',
        path: '/no'
      }, {
        title: '备案变更',
        path: '/no'
      }, {
        title: '窗口项目调整',
        path: '/no'
      }, {
        title: '项目结转(延期)',
        path: '/no'
      }, {
        title: '项目信息维护',
        path: '/no'
      }, {
        title: '服务联系单管理',
        path: '/no'
      }, {
        title: '窗口核准变更',
        path: '/no'
      }, {
        title: '外网申报受理',
        path: '/no'
      }]
    }, {
      title: '年度计划管理',
      icon: 'folder',
      subMenu: []
    }, {
      title: '项目统计',
      icon: 'book',
      subMenu: []
    }, {
      title: '政策法规',
      icon: 'calendar',
      subMenu: []
    }, {
      title: '网站公告',
      icon: 'lock',
      subMenu: []
    }, {
      title: '密码设置',
      icon: 'lock',
      subMenu: []
    }]
  },
  mutations: {
    setMenu(state, data) {
      state.mainList = data;
    },
  },
  actions: {
    // updateMenuList({
    //   state,
    //   commit,
    //   rootGetters
    // }) {
    //   updateMenu(rootGetters.roleId).then(({
    //     functionList,
    //     quickFunctionList
    //   }) => {
    //     return;
    //     commit('setMenu', formatData(functionList));
    //   })
    // }
  },
  getters: {
    menuList: state => state.list
  }
}
export default menuList;