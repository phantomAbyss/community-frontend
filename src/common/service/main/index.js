import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'main'
export default {
    /* 根据map的条件查询帖子 */
    search(page, size, searchMap) {
        return request({
            url: `/${group_name}/${api_name}/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        }).then(res => {
            return res.data;
        })
    },
}