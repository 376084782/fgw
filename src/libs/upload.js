import axios from '@/libs/api.request'
import { dateFormater } from '@/libs/util'
import $ from 'jquery'

const $updateLoadInput = $('<input type="file" id="uploadInput"/>');;
$updateLoadInput.css({
  display: 'none'
});
export const upload = function (type = 1) {
  return new Promise((rsv, rej) => {
    if ($('#uploadInput').length == 0) {
      $('body').append($updateLoadInput)
    }
    $updateLoadInput.unbind();
    $updateLoadInput.bind('change', e => {
      fileUploadAccess($updateLoadInput[0], type, e => {
        rsv(e);
      }, e => {
        rej(e)
      })
    })
    $updateLoadInput.trigger('click');
  })
}
export const fileUploadAccess = function (fileObj, type, callback, errCall) {
  if ($('#ossScript').length == 0) {//加载 script
    $('body').append($('<script src="http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.4.min.js" id="ossScript"></script>'));
  }
  if (typeof OSS == 'undefined') {//等待 script 加载完成
    setTimeout(function () {
      fileUploadAccess(fileObj, type, callback, errCall);
    }, 100);
    return;
  }
  axios.request({
    url: '/his/ums/upload/account',
    method: 'post',
    data: { "type": type }
  }).then(obj => {
    //if (obj.suffix=='*'){//允许所有文件上传
    var client = new OSS.Wrapper({
      region: 'oss-cn-hangzhou',
      accessKeyId: obj.ossAccountInfo.accessKeyId,
      accessKeySecret: obj.ossAccountInfo.accessKeySecret,
      stsToken: obj.ossAccountInfo.securityToken,
      endpoint: obj.endpoint,
      bucket: obj.bucketName
    });
    var fileName = fileObj.value;
    var suffix = fileName.substr(fileName.indexOf("."));
    var now = dateFormater(new Date().getTime(), "yyyyMMddhhmmssS");
    var fileRemotePath = obj.path + now + suffix;
    client.multipartUpload(fileRemotePath, fileObj.files[0]).then(function (result) {
      callback(result);
      fileObj.value = '';
    }).catch(function (err) {
      errCall(err);
      fileObj.value = '';
    });
  })

}