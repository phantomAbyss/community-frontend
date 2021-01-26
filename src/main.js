import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 引入view ui */
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './plugins/iview.js';

/* 引入element ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

/* 引入全局样式 */
import '@/assets/css/global.css';

Vue.use(ViewUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
