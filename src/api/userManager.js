import axios from '@/libs/api.request'

export const getUserList = ({
  pageNo,
  pageSize,
  keyWord
}) => {
  return axios.request({
    url: '/his/ums/account/page',
    method: 'post',
    data: {
      pageNo,
      pageSize,
      keyWord
    }
  })
}

export const getUserDetail = (tAccountId) => {
  return axios.request({
    url: '/his/ums/account/admin/detail',
    method: 'post',
    data: {
      tAccountId
    }
  })
}

export const updateUserInfo = (data) => {
  return axios.request({
    url: '/his/ums/account/admin/update',
    method: 'post',
    data
  })
}

export const addUserInfo = (data) => {
  return axios.request({
    url: '/his/ums/account/createList',
    method: 'post',
    data
  })
}


export const getRoleList = (tAccountId) => {
  return axios.request({
    url: '/his/ums/relAccountDep/admin/list',
    method: 'post',
    data: {
      tAccountId
    }
  })
}

export const updateRoleList = (data) => {
  return axios.request({
    url: '/his/ums/relAccountDep/operatorList',
    method: 'post',
    data: data
  })
}

export const addRelAccountDep = (tAccountId) => {
  return axios.request({
    url: '/his/ums/relAccountDep/admin/createList',
    method: 'post',
    data: {
      tAccountId
    }
  })
}
export const resetPwd = (accountId) => {
  return axios.request({
    url: '/his/ums/password/admin/reset',
    method: 'post',
    data: {
      accountId
    }
  })
}
export const resetAdvPwd = (accountId) => {
  return axios.request({
    url: '/his/ums/password/admin/adviceReset',
    method: 'post',
    data: {
      accountId
    }
  })
}

