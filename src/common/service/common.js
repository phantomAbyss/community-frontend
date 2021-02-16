import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'common'
export default {
  /* 发送手机验证码 */
  sendCheckCodeByMobile(mobile) {
    return request({
      url: `/${group_name}/${api_name}/mobile/${mobile}`,
      method: 'put'
    }).then(res => {
      return res.data;
    })
  },
  /* 判断手机发送的验证码是否正确 */
  checkVerifyCodeByMobile(code) {
    return request({
        url: `/${group_name}/${api_name}/verify/mobile/${code}`,
        method: 'post'
    }).then(res => {
        return res.data;
    })
},
  /* 发送邮箱验证码 */
  sendCheckCodeByEmail(email) {
    return request({
      url: `/${group_name}/${api_name}/email/${email}`,
      method: 'put'
    }).then(res => {
      return res.data;
    })
  },
  /* 判断邮箱发送的邮箱是否正确 */
  checkVerifyCodeByEmail(code) {
    return request({
        url: `/${group_name}/${api_name}/verify/email/${code}`,
        method: 'post'
    }).then(res => {
        return res.data;
    })
},
}