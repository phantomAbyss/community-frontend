import request from '@/common/utils/request'
const group_name = 'profile'
const api_name = 'baseInfo'
export default {
    /* 获取个人的基本信息 */
    getBaseInfo() {
        return request({
            url: '/${group_name}/${api_name}/baseInfo',
            method: 'get'
        })
    }
}