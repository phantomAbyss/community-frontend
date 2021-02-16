import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'account'
export default {
  /* 获取账户的安全信息 */
  getSecurityInfo() {
    return request({
      url: `/${group_name}/${api_name}/security/info`,
      method: 'get'
    })
  },
  /* 验证用户的旧密码是否输入正确 */
  verifyPassword(value) {
    return request({
      url: `/${group_name}/${api_name}/password/verify`,
      method: 'post',
      data: value
    }).then(res => {
      return res.data;
    })
  },
  /* 更新用户的密码 */
  updatePassword(value) {
    return request({
      url: `/${group_name}/${api_name}/password/update`,
      method: 'post',
      data: value
    }).then(res => {
      return res.data;
    })
  },
  /* 更新用户的手机号 */
  updateMobile(value) {
    return request({
      url: `/${group_name}/${api_name}/mobile/update`,
      method: 'post',
      data: value
    }).then(res => {
      return res.data;
    })
  },
  /* 更新用户的邮箱 */
  updateEmail(value) {
    return request({
      url: `/${group_name}/${api_name}/email/update`,
      method: 'post',
      data: value
    }).then(res => {
      return res.data;
    })
  },
  /* 根据页码和页数查询登录记录 */
  getLogList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/login/log/${size}/${page}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取所有的账号类型 */
  getBlindList() {
    return request({
      url: `/${group_name}/${api_name}/blind/list`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取已经绑定的账号图标 */
  getBlindListByType(type) {
    return request({
      url: `/${group_name}/${api_name}/blinded/${type}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  }
}