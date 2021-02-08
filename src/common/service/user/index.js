import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'user'
export default {
    /* 发送验证码 */
    sendCheckCode(mobile) {
        return request({
            url: `/${group_name}/${api_name}/sendsms/${mobile}`,
            method: 'put'
        })
    },
    /* 用户注册 */
    register(code, model) {
        return request({
            url: `/${group_name}/${api_name}/register/${code}`,
            method: 'post',
            data: model
        })
    },
    /* 用户登录 */
    login(model) {
        return request({
            url: `/${group_name}/${api_name}/login`,
            method: 'post',
            data: model
        })
    },
}