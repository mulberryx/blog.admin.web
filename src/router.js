/**
 * 路由配置
 * @author Philip
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './routes/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/user/list',
        name: 'user-list',
        component: () => import(/* webpackChunkName: "user-list" */ './routes/user/list.vue')
    }, {
        path: '/user/save',
        name: 'user-save',
        component: () => import(/* webpackChunkName: "user-save" */ './routes/user/save.vue')
    }, {
        path: '/content/list',
        name: 'content-list',
        component: () => import(/* webpackChunkName: "content-list" */ './routes/content/list.vue')
    }, {
        path: '/content/save',
        name: 'content-save',
        component: () => import(/* webpackChunkName: "content-save" */ './routes/content/save.vue')
    }, {
        path: '/tag/list',
        name: 'tag-list',
        component: () => import(/* webpackChunkName: "tag-list" */ './routes/tag/list.vue')
    }, {
        path: '/tag/save',
        name: 'tag-save',
        component: () => import(/* webpackChunkName: "tag-save" */ './routes/tag/save.vue')
    }, {
        path: '/journal/list',
        name: 'journal-list',
        component: () => import(/* webpackChunkName: "journal-list" */ './routes/journal/list.vue')
    }, {
        path: '/journal/save',
        name: 'journal-save',
        component: () => import(/* webpackChunkName: "journal-save" */ './routes/journal/save.vue')
    }, {
        path: '/scan/list',
        name: 'scan-list',
        component: () => import(/* webpackChunkName: "scan-list" */ './routes/scan/list.vue')
    }, {
        path: '/scan/save',
        name: 'scan-save',
        component: () => import(/* webpackChunkName: "scan-save" */ './routes/scan/save.vue')
    }, {
        path: '/spider/list',
        name: 'spider-list',
        component: () => import(/* webpackChunkName: "spider-list" */ './routes/spider/list.vue')
    }, {
        path: '/spider/save',
        name: 'spider-save',
        component: () => import(/* webpackChunkName: "spider-save" */ './routes/spider/save.vue')
    }]
})
