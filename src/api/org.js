import axios from '@/libs/api.request'

export const getOrgList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/hospital/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}

export const getOrgDetail = (id) => {
  return axios.request({
    url: '/his/ums/hospital/detail',
    method: 'post',
    data: {
      hospitalId:id
    }
  })
}
export const updateOrgDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospital/update',
    method: 'post',
    data
  })
}
export const addOrgDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospital/create',
    method: 'post',
    data
  })
}