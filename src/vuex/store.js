// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     // 全局变量
//     state:{
//         user_state:0,
//         uname:'',
//         // upwd:''
//     },

//     // 修改全局变量的方法
//     // 同步修改
//     mutations:{
//         login(state,uname){
//             state.user_state = 1;
//             this.state.uname = uname;
//             // this.state.upwd = upwd;
//         },
//         logout(state){
//             sessionStorage.setItem('uname','');
//             sessionStorage.setItem('user_state',0);
//             state.user_state = 0;
//             this.uname = '';
//             // this.state.upwd = '';

//         }
//     },
//     // 异步修改
//     actions:{
//         login:({commit})=>commit('login'),
//         logout:({commit})=>commit('logout')
//     },
    
// })

// export default store





import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as  mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
//const store = new Vuex.Store({
  //定义状态
 state:{
    currentUser:null,   //当前用户
    isLogin:false,    //判断当前用户是否已经登录
    // 存储token
    Authorization: 
      localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
 },
  getters,
  mutations,
  actions
});

//export default store
