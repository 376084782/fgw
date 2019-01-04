import axios from '@/libs/api.request'

export const updateNotice = ({
  tAccountId,
  id
}) => {
  return axios.request({
    url: '/his/ums/msg/getMsgList',
    method: 'post',
    data: {
      tAccountId,
      id
    }
  })
}

export const setRead = (token) => {
  return axios.request({
    url: 'notice/setRead',
    method: 'post',
    data: {
      token
    }
  })
}