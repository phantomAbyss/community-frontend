import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'post'
export default {
    /* 根据帖子的id获取对应的评论 */
    getCommentList(postId, page, size) {
        return request({
            url: `/${group_name}/${api_name}/comment/${postId}/${page}/${size}`,
            method: 'get'
        }).then(res => {
          return res.data;
        })
    },
    /* 根据帖子的id获取文章的内容 */
    getPostDetail(postId) {
        return request({
            url: `/${group_name}/${api_name}/detail/${postId}`,
            method: 'get'
        }).then(res => {
          return res.data;
        })
    },
    /* 给帖子点赞 */
    likePost(postId) {
        return request({
            url: `/${group_name}/${api_name}/like/${postId}`,
            method: 'post'
        }).then(res => {
          return res.data;
        })
    },
    /* 收藏帖子 */
    collectPost(postId) {
        return request({
            url: `/${group_name}/${api_name}/collect/${postId}`,
            method: 'post'
        }).then(res => {
          return res.data;
        })
    },
}