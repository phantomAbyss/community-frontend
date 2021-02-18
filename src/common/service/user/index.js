import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'user'
export default {
  /* 用户注册 */
  register(code, model) {
    return request({
      url: `/${group_name}/${api_name}/register/${code}`,
      method: 'post',
      data: model
    }).then(res => {
      return res.data;
    })
  },
  /* 用户登录 */
  login(model) {
    return request({
      url: `/${group_name}/${api_name}/login`,
      method: 'post',
      data: model
    }).then(res => {
      return res.data;
    })
  },
}