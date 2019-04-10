import Vue from 'vue'
import ElementUI from 'element-ui'            //element-ui 依赖
import 'element-ui/lib/theme-chalk/index.css' //element-ui 样式依赖
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from "axios"
import QS from 'axios'                   //
import VideoPlayer from 'vue-video-player'  //视频依赖
import store from './vuex/store' //状态管理仓库
require('video.js/dist/video-js.css')   // 这个是videoJs的样式
require('vue-video-player/src/custom-theme.css') // 这个是vue-video-player的样式
// 公共组件
import myFoot from './foot/myFoot.vue'
import Header from './header/myHeader.vue'
// 懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:"http://127.0.0.1:8686/load_png/loading.gif",
  error:"http://127.0.0.1:8686/load_png/400-error.png"
})
Vue.component("headervue",Header);
Vue.component("footvue",myFoot);
Vue.use(VideoPlayer)
Vue.use(ElementUI)
Vue.use(VueRouter)
axios.defaults.withCredentials=true;

Vue.prototype.axios=axios;
Vue.prototype.qs=QS;

Vue.config.productiontip = false //关闭警告
const router = new VueRouter({
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
