import axios from '@/libs/api.request'
import md5 from 'js-md5';

export const login = ({
  loginName,
  password,
}) => {
  const data = {
    loginName,
    password: md5(password),
  }
  return axios.request({
    url: '/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/his/ums/login/token',
    data: {
      token
    },
    method: 'post'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post',
    data: {
      token
    }
  })
}
export const getCodePic = (type) => {
  return new Promise((rsv, rej) => {
    axios.request({
      url: '/his/ums/verificationCode/picture/create',
      method: 'post',
      responseType: 'arraybuffer',
      data: {
        type
      }
    }).then(response => {
      rsv('data:image/png;base64,' + btoa(
        new Uint8Array(response).reduce((data, byte) => data + String.fromCharCode(byte), '')
      ))
    }).catch(e => {
      rej(e)
    })
  })
}
export const getForgetPhoneCode = (phone) => {
  return axios.request({
    url: '/his/ums/verificationCode/mobile/create',
    method: 'post',
    data: {
      phoneNum: phone,
      type: 2
    }
  })
}

export const resetPsw = ({
  phoneNum,
  verificationCode,
  pwd
}) => {
  return axios.request({
    url: '/his/ums/password/forget',
    method: 'post',
    data: {
      phoneNum,
      verificationCode,
      pwd
    }
  })
}

export const getRoleList = () => {
  return axios.request({
    url: '/his/ums/userRole/list',
    method: 'post',
    data: {
      type
    }
  })
}
export const updateDepList = () => {
  return axios.request({
    url: '/his/ums/relAccountDep/list',
    method: 'post',
    data: {
      type
    }
  })
}

export const updateMenu = (roleId) => {
  return axios.request({
    url: '/his/ums/relRoleFunc/tree',
    method: 'post',
    data: {
      roleId
    }
  })
}

export const changeSelRole = (id) => {
  return axios.request({
    url: '/his/ums/relAccountDep/default',
    method: 'post',
    data: {
      id
    }
  })
}

export const selfResetPwd = ({
  oldPwd,
  newPwd
}) => {
  return axios.request({
    url: '/his/ums/password/reset',
    method: 'post',
    data: {
      oldPwd: md5(oldPwd),
      newPwd: md5(newPwd)
    }
  })
}
export const selfResetAdvPwd = ({
  oldPwd,
  newPwd
}) => {
  return axios.request({
    url: '/his/ums/password/adviceReset',
    method: 'post',
    data: {
      oldPwd: md5(oldPwd),
      newPwd: md5(newPwd)
    }
  })
}