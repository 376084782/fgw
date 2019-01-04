export const TOKEN_KEY = 'token'

import {
  hasOneOf,
} from '@/libs/tools'

export const setToken = (token, dateTo = new Date().getTime()) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify({
    dateTo: dateTo,
    token
  }));
}

export const getToken = () => {
  // 如果当天本地记录有token,直接用于登录
  const tokenData = localStorage.getItem(TOKEN_KEY);
  if (tokenData) {
    let config = JSON.parse(tokenData);
    let lastDate = new Date(config.dateTo);
    let nowDate = new Date();
    let token = config.token;
    // return token && nowDate.getTime() < lastDate.getTime() ? token : false;
    return token;
  }
  return false
}
/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  let str = url.split('?')[1];
  if (!str) {
    return {};
  }
  const keyValueArr = str.split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

// scrollTop animation
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
const title = 'Salus';
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}

export function tableFixer(elTable, clickHandler) {
  let wrap = $(elTable).find('.el-table__body-wrapper');
  let div = $('<div class="more"><span>更多内容</span></div>');
  div.on('click', clickHandler)
  wrap.append(div);

}

export function ObjectSame(obj1, obj2) {
  if (typeof obj1 != 'object' || typeof obj2 != 'object') {
    if (obj1 != obj2) {
      return false;
    }
  }
  let keys1 = [];
  for (let key in obj1) {
    if (obj1[key]) {
      keys1.push(key)
    }
  }
  let keys2 = [];
  for (let key in obj2) {
    if (obj2[key]) {
      keys2.push(key)
    }
  }
  if (keys1.length != keys2.length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] && obj2[key] && typeof obj1[key] == 'object') {
      if (!ObjectSame(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] != obj2[key]) {
      if (!obj1[key] && !obj2[key]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
}

export function dateFormater(timeStamp, fmt) {
  if (!isNaN(0 * timeStamp) && timeStamp.length == 10) {
    timeStamp *= 1000;
  }
  /**
   * @fix 解决ios系统不支持横杠写法(如:2018-8-8 10:22)的显示bug
   * @date 2018/12/25
   */
  if (typeof (timeStamp) == 'string') {
    timeStamp = timeStamp.replace(/\-/g, '/')
  }
  let date = new Date(timeStamp);
  var o = {
    "M+": date.getMonth() + 1, //月份   
    "d+": date.getDate(), //日   
    "h+": date.getHours(), //小时   
    "m+": date.getMinutes(), //分   
    "s+": date.getSeconds(), //秒   
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
    "S": date.getMilliseconds() //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}