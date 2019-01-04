import axios from '@/libs/api.request'

// 获取下拉列表字典数据
export const getDictionary = (codeList) => {
  return axios.request({
    url: '/his/ums/dictionary/list',
    method: 'post',
    data: {
      codeList
    }
  })
}

// 获取下拉表格数据
export const getDicTableList = ({
  pageNo,
  pageSize,
  keyWord
}) => {
  return axios.request({
    url: '/his/ums/dictMain/page',
    method: 'post',
    data: {
      pageNo,
      pageSize,
      keyWord
    }
  })
}

// 获取下拉子表数据
export const getDicSubTableList = (dictMainId) => {
  return axios.request({
    url: '/his/ums/dictCol/list',
    method: 'post',
    data: {
      dictMainId
    }
  })
}

export const getDecDetail = (dictMainId) => {
  return axios.request({
    url: '/his/ums/dictMain/detail',
    method: 'post',
    data: {
      dictMainId
    }
  })
}
export const updateDecDetail = (data) => {
  return axios.request({
    url: '/his/ums/dictMain/operatorList',
    method: 'post',
    data: {
      dictMain: data
    }
  })
}
export const addDecDetail = (data) => {
  return axios.request({
    url: '/his/ums/dictMain/create',
    method: 'post',
    data: {
      dictMain: data
    }
  })
}

export const delDecDetail = (dictMainId) => {
  return axios.request({
    url: '/his/ums/dictMain/delete',
    method: 'post',
    data: {
      dictMainId
    }
  })
}
export const getHospitalList = () => {
  return axios.request({
    url: '/his/ums/hospital/current/detail',
    method: 'post',
    data: {
    }
  })
}

export const getDepList = () => {
  return axios.request({
    url: '/his/ums/hospitalDepartment/current/list',
    method: 'post',
    data: {
    }
  })
}

export const getRoleList = () => {
  return axios.request({
    url: '/his/ums/userRole/current/list',
    method: 'post',
    data: {
    }
  })
}
export const getDictList = () => {
  return axios.request({
    url: '/his/ums/dictMain/list',
    method: 'post',
    data: {
    }
  })
}
export const getDepGroupList = () => {
  return axios.request({
    url: '/his/ums/depGroup/list',
    method: 'post',
    data: {
    }
  })
}
export const getHosParList = () => {
  return axios.request({
    url: '/his/ums/hospital/list',
    method: 'post',
    data: {
    }
  })
}


