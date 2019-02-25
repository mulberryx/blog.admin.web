/**
 * ajax 配置
 * @author Philip
 */

import axois from 'axois'
import { Message, MessageBox } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})