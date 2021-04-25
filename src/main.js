import Vue from 'vue'
import Main from './components/Main.vue'
//import Test from './components/EssentialData.vue'
// 引入jQuery、bootstrap
import $ from 'jquery'
import "bootstrap";
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 引入路由
import router from "./router.js"
// 引入axios
import axios from "axios";
// 全局注册 $
Vue.prototype.$ = $
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
axios.defaults.baseURL = '/api'

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
