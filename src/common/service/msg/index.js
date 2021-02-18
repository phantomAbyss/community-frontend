import request from '@/common/utils/request'
const group_name = 'api'
const api_name = 'msg'
export default {
  /* 获取用户的好友 */
  getConversationList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/conversation/list/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 根据会话Id获取对应的消息列表 */
  getMsgList(msgId, page, size) {
    return request({
      url: `/${group_name}/${api_name}/list/${msgId}/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取通知消息 */
  getNoticeList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/notice/list/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取点赞消息 */
  getLikeList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/like/list/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取回复消息 */
  getReplyList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/reply/list/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  },
  /* 获取关注消息 */
  getFollowList(page, size) {
    return request({
      url: `/${group_name}/${api_name}/follow/list/${page}/${size}`,
      method: 'get',
    }).then(res => {
      return res.data;
    })
  }
}