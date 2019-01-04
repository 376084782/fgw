import axios from '@/libs/api.request'

export const getRoleTable = ({
  pageNo,
  pageSize,
  keyWord
}) => {
  return axios.request({
    url: '/his/ums/hospitalRole/page',
    method: 'post',
    data: {
      pageNo,
      pageSize,
      keyWord
    }
  })
}

export const getRoleDetail = (id) => {
  return axios.request({
    url: '/his/ums/hospitalRole/detail',
    method: 'post',
    data: {
      id
    }
  })
}
export const addRoleDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospitalRole/createList',
    method: 'post',
    data
  })
}
export const updateRoleDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospitalRole/update',
    method: 'post',
    data: {
      role: data
    }
  })
}


export const getFunctionDetail = (roleId) => {
  return axios.request({
    url: '/his/ums/relRoleFunc/detail',
    method: 'post',
    data: {
      roleId
    }
  })
}

export const getFuncList = () => {
  return axios.request({
    url: '/his/ums/function/tree',
    method: 'post',
    data: {
    }
  })
}
export const updateFunctionDetail = ({
  roleId, functionList
}) => {
  return axios.request({
    url: '/his/ums/relRoleFunc/update',
    method: 'post',
    data: {
      roleId,
      functionList
    }
  })
}

