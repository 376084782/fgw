import axios from '@/libs/api.request'

// 获取下拉列表字典数据
export const getUnitList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/baseUtil/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}
export const getUnitDetail = (baseUtilId) => {
  return axios.request({
    url: '/his/ums/baseUtil/detail',
    method: 'post',
    data: {
      baseUtilId
    }
  })
}
export const updateUnitDetail = (data) => {
  return axios.request({
    url: '/his/ums/baseUtil/update',
    method: 'post',
    data: {
      baseUtil: data
    }
  })
}
export const addUnitDetail = (data) => {
  return axios.request({
    url: '/his/ums/baseUtil/createList',
    method: 'post',
    data: {
      baseUtilList: [data]
    }
  })
}
export const getUnitChangeList = (fromBaseUnitId) => {
  return axios.request({
    url: '/his/ums/utilChange/list',
    method: 'post',
    data: {
      fromBaseUnitId
    }
  })
}
export const updateUnitChangeList = (data) => {
  return axios.request({
    url: '/his/ums/utilChange/operatorList',
    method: 'post',
    data
  })
}



