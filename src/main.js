import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(ElementUI)
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,store
  
})
