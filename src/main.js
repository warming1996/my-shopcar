import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 导入按需加载的 vant 组件
import './plugins/vant'
// 导入头部组件
import Header from './components/Header.vue'
// 导入底部组件
import Footer from './components/Footer.vue'
// 导入加载组件
import Loading from './components/Loading.vue'
// 导入评论加载组件
import Comments from './components/comments/Comments.vue'
// 导入外部图标样式
import './assets/font/iconfont.css'
// 设置请求的根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
// 过滤器
Vue.filter('dataFormat', function(dateStr, pattern = '') {
  var dt = new Date(dateStr)
  var year = dt.getFullYear()
  var month = dt.getMonth() + 1
  month = month < 10 ? '0' + month : month
  var day = dt.getDate()
  day = day < 10 ? '0' + day : day
  return `${year}-${month}-${day}`
})
// 挂载axios
Vue.prototype.$http = axios

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Loading', Loading)
Vue.component('Comments', Comments)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
