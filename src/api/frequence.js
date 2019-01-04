import axios from '@/libs/api.request'

// 获取下拉列表字典数据
export const getFreList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/frequency/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}
export const getFreDetail = (frequencyId) => {
  return axios.request({
    url: '/his/ums/frequency/detail',
    method: 'post',
    data: {
      frequencyId
    }
  })
}
export const updateFreDetail = (data) => {
  return axios.request({
    url: '/his/ums/frequency/update',
    method: 'post',
    data: {
      frequency:data
    }
  })
}
export const addFreDetail = (data) => {
  return axios.request({
    url: '/his/ums/frequency/createList',
    method: 'post',
    data: {
      frequencyList:[data]
    }
  })
}