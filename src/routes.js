import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
// import myHeader from './header/header.vue'
import carousel from './carousel/carousel.vue'
import Home from './home/Home.vue'
import Video from './video/Video'
import myVider from './video/MyVideo.vue'
import myBody from './body/Body.vue'
import myFoot from './foot/myFoot.vue'
import TVideo from './video/TVideo.vue'
import Test from './header/test.vue'
import SSC from './cardetail/ssc'
import Login from './login/login'
import Introduce from './introduce/introduce'
// import tLogin from './login/t_login'

Vue.use(Router)

const routes = [
    // { path: '/carousel',components:{default:carousel}},
    // { path: '/app',component: App},
    { path: '/home',component:Home},
    { path: '/',component:Home},
    // { path: '/video',component:Video},
    // { path: '/myvideo',component:myVider},
    { path: '/body',component:myBody},
    { path: '/foot',component:myFoot},
    // { path: '/tvideo',component:TVideo},
    // { path: '/test',component:Test},
    // { path: '/sscInfor',component:SSC},
    { path: '/login',component:Login},
    { path: '/introduce',name:'introduce',component:Introduce}
    // { path: '/t_login',component:tLogin},
    // { path: '/myheader',component:myHeader},
    // { path: '/other',commponts:{default:carousel,body:Body}}
    // { path: '/myheader',component:myHeader},
];


  


export default routes;
