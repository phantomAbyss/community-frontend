import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'profile'
export default {
    /* 获取用户的基础信息 */
    getBaseInfo() {
        return request({
            url: `/${group_name}/${api_name}/base/info`,
            method: 'get'
        }).then(res => {
            return res.data;
        })
    },
    /* 获取用户的工作信息 */
    getJobInfo(username) {
        return request({
            url: `/${group_name}/${api_name}/job/info/${username}`,
            method: 'get'
        })
    },
    /* 获取工作的类型列表 */
    getJobList() {
        return request({
            url: `/${group_name}/${api_name}/job/list`,
            method: 'get'
        })
    },
    /* 获取省份信息 */
    getProvinceList() {
        return request({
            url: `/${group_name}/${api_name}/province/list`,
            method: 'get'
        })
    },
    /* 根据省份信息获取城市信息 */
    getCityList(id) {
        return request({
            url: `/${group_name}/${api_name}/city/list/${id}`,
            method: 'get'
        })
    },
    /* 更新用户的基本信息 */
    updateBaseInfo(model) {
        return request({
            url: `/${group_name}/${api_name}/base/update`,
            method: 'post',
            data: model
        }).then(res => {
          return res.data;
        })
    },
    /* 更新用户的工作信息 */
    updateJobInfo(model) {
        return request({
            url: `/${group_name}/${api_name}/job/update`,
            method: 'post',
            data: model
        })
    },
    /* 获取所有的兴趣标签 */
    getTagList() {
        return request({
            url: `/${group_name}/${api_name}/tag/list`,
            method: 'get'
        }).then(res => {
            return res.data;
        })
    },
    /* 关注标签 */
    followTag(model) {
        return request({
            url: `/${group_name}/${api_name}/tag/follow`,
            method: 'post',
        }).then(res => {
            return res.data;
        })
    },
}