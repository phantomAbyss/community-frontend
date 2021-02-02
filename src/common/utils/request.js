import axios from 'axios'
// import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.25.131:7300/mock/601758196f0840002cae1199', // api的base_url
    timeout: 30000, // 请求超时时间
    // headers: { 'Authorization':  "Bearer "+getUser().token }
  })
export default service