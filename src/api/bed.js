import axios from '@/libs/api.request'

export const getRoomList = ({
  keyWord,
  pageNo,
  pageSize,
  deparmentId = null,
  roomType = ''
}) => {
  return axios.request({
    url: '/his/ums/room/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize,
      deparmentId,
      roomType
    }
  })
}
export const getRoomTypeList = () => {
  return axios.request({
    url: '/his/ums/roomType/list',
    method: 'post',
    data: {}
  })
}
export const updateRoomType = (data) => {
  return axios.request({
    url: '/his/ums/roomType/operatorList',
    method: 'post',
    data
  })
}
export const getRoomDetail = (roomId) => {
  return axios.request({
    url: '/his/ums/room/detail',
    method: 'post',
    data: {
      roomId
    }
  })
}
export const addRoomDetail = (data) => {
  return axios.request({
    url: '/his/ums/room/createList',
    method: 'post',
    data: {
      roomList: [data]
    }
  })
}
export const updateRoomDetail = (data) => {
  return axios.request({
    url: '/his/ums/room/update',
    method: 'post',
    data: {
      room: data
    }
  })
}
export const getBedList = (roomId) => {
  return axios.request({
    url: '/his/ums/bed/list',
    method: 'post',
    data: {
      roomId
    }
  })
}
export const getBedTypeList = () => {
  return axios.request({
    url: '/his/ums/bedType/list',
    method: 'post',
    data: {}
  })
}
export const updateBedType = (data) => {
  return axios.request({
    url: '/his/ums/bedType/operatorList',
    method: 'post',
    data
  })
}
export const getBedDetail = (bedId) => {
  return axios.request({
    url: '/his/ums/bed/detail',
    method: 'post',
    data: {
      bedId
    }
  })
}
export const addBedDetail = (data) => {
  return axios.request({
    url: '/his/ums/bed/createList',
    method: 'post',
    data: {
      bedList: [data]
    }
  })
}
export const updateBedDetail = (data) => {
  return axios.request({
    url: '/his/ums/bed/update',
    method: 'post',
    data: {
      bed: data
    }
  })
}