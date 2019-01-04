import axios from '@/libs/api.request'

// 获取下拉列表字典数据
export const getAdvList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/medicalAdvice/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}

export const getAdvDetail = (id) => {
  return axios.request({
    url: '/his/ums/medicalAdvice/detail',
    method: 'post',
    data: {
      medicalAdviceId: id
    }
  })
}

export const updateAdvDetail = (data) => {
  return axios.request({
    url: '/his/ums/medicalAdvice/update',
    method: 'post',
    data: {
      medicalAdvice: data
    }
  })
}
export const addAdvDetail = (data) => {
  return axios.request({
    url: '/his/ums/medicalAdvice/createList',
    method: 'post',
    data: {
      medicalAdviceList: [data]
    }
  })
}

// 获取下拉列表字典数据
export const getCostList = ({
  keyWord,
  pageNo,
  pageSize,
  tMedicalAdviceId = null
}) => {
  return axios.request({
    url: '/his/ums/chargeItem/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize,
      tMedicalAdviceId
    }
  })
}
export const getCostDetail = (id) => {
  return axios.request({
    url: '/his/ums/chargeItem/detail',
    method: 'post',
    data: {
      chargeItemId: id
    }
  })
}

export const updateCostDetail = (data) => {
  return axios.request({
    url: '/his/ums/chargeItem/update',
    method: 'post',
    data: {
      chargeItem: data
    }
  })
}
export const addCostDetail = (data) => {
  return axios.request({
    url: '/his/ums/chargeItem/createList',
    method: 'post',
    data: {
      chargeItemList: [data]
    }
  })
}


// 获取下拉列表字典数据
export const getMedList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/pharmacyItem/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}
export const getMedDetail = (id) => {
  return axios.request({
    url: '/his/ums/pharmacyItem/detail',
    method: 'post',
    data: {
      pharmacyItemId: id
    }
  })
}

export const updateMedDetail = (data) => {
  return axios.request({
    url: '/his/ums/pharmacyItem/update',
    method: 'post',
    data: {
      pharmacyItem: data
    }
  })
}
export const addMedDetail = (data) => {
  return axios.request({
    url: '/his/ums/pharmacyItem/createList',
    method: 'post',
    data: {
      pharmacyItemList: [data]
    }
  })
}


export const getStockList = ({
  keyWord,
  pageNo,
  pageSize
}) => {
  return axios.request({
    url: '/his/ums/inventoryItem/page',
    method: 'post',
    data: {
      keyWord,
      pageNo,
      pageSize
    }
  })
}
export const getStockDetail = (id) => {
  return axios.request({
    url: '/his/ums/inventoryItem/detail',
    method: 'post',
    data: {
      inventoryItemId: id
    }
  })
}

export const updateStockDetail = (data) => {
  return axios.request({
    url: '/his/ums/inventoryItem/update',
    method: 'post',
    data: {
      inventoryItem: data
    }
  })
}
export const addStockDetail = (data) => {
  return axios.request({
    url: '/his/ums/inventoryItem/createList',
    method: 'post',
    data: {
      inventoryItemList: [data]
    }
  })
}
export const addCombine = ({
  tMedicalAdviceId,
  tChargeItemId
}) => {
  return axios.request({
    url: '/his/ums/relMedicalCharge/createList',
    method: 'post',
    data: {
      relMedicalChargeList: [{
        tMedicalAdviceId,
        tChargeItemId
      }]
    }
  })
}
export const delCombine = ({
  tMedicalAdviceId,
  tChargeItemId
}) => {
  return axios.request({
    url: '/his/ums/relMedicalCharge/deleteList',
    method: 'post',
    data: {
      relMedicalChargeList: [{
        tMedicalAdviceId,
        tChargeItemId
      }]
    }
  })
}
export const updateCombine = ({
  tMedicalAdviceId,
  tChargeItemId,
  fromTChargeItemId
}) => {
  return axios.request({
    url: '/his/ums/relMedicalCharge/updateList',
    method: 'post',
    data: {
      relMedicalChargeList: [{
        tMedicalAdviceId,
        tChargeItemId,
        fromTChargeItemId
      }]
    }
  })
}
export const getMajor4Detail = (medicalAdviceId) => {
  return axios.request({
    url: '/his/ums/medicalFourRelation/detail',
    method: 'post',
    data: {
      medicalAdviceId
    }
  })
}
export const updateMajor4Detail = (data) => {
  return axios.request({
    url: '/his/ums/medicalFourRelation/operator',
    method: 'post',
    data
  })
}
export const getMajor4List = (medicalAdviceId) => {
  return axios.request({
    url: '/his/ums/medicalFourRelation//send/list',
    method: 'post',
    data: {
      medicalAdviceId
    }
  })
}
export const updateMajor4List = (data) => {
  return axios.request({
    url: '/his/ums/medicalFourRelation/send/operatorList',
    method: 'post',
    data
  })
}

