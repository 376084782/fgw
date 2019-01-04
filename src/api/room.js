import axios from '@/libs/api.request'

export const getRoomList = ({
  depWard = '',
  keyWord = '',
  tDepGroupId = '',
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/hospitalDepartment/page',
    method: 'post',
    data: {
      depWard,
      keyWord,
      tDepGroupId,
      pageNo,
      pageSize
    }
  })
}
export const getRoomDetail = (id) => {
  return axios.request({
    url: '/his/ums/hospitalDepartment/detail',
    method: 'post',
    data: {
      id
    }
  })
}
export const updateRoomDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospitalDepartment/update',
    method: 'post',
    data: {
      department: data
    }
  })
}
export const addRoomDetail = (data) => {
  return axios.request({
    url: '/his/ums/hospitalDepartment/createList',
    method: 'post',
    data: {
      departmentList: [data]
    }
  })
}
export const getStaffList = (id) => {
  return axios.request({
    url: '/his/ums/departmentUser/list',
    method: 'post',
    data: {
      id
    }
  })
}