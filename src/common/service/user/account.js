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
    }
}