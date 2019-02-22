/**
 * 应用入口
 * @author Philip
 */
import '../theme/index.css'
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(ElementUI, { locale })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
