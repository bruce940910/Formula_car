<template>
  <div id="myHeader">
    <el-container>
      <el-menu  class="el-menu-demo" mode="horizontal" background-color="#545c64">
        <el-menu-item index="1"><a href="javascript:;"><img src="../assets/logo.png" ></a></el-menu-item>
        <el-menu-item index="2"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="3"><a href="javascript:;">赛车介绍</a></el-menu-item>
        <el-menu-item index="4"><a href="javascript:;" target="_blank">赛事新闻</a></el-menu-item>
        <el-menu-item index="5"><a href="javascript:;" target="_blank">参加比赛</a></el-menu-item>
        
      <button v-if="!isLogin" @click="j_login" class="login">登陆</button>
      <button v-if="isLogin" @click="j_logout" class="login">退出</button>
      </el-menu>
      
    </el-container>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data(){
    return{
      // login_state:window.localStorage.getItem('isLogin'),
    }
  },
  methods:{
    j_login(){
      this.$router.push({
        path:'/login'
      })
    },
    j_logout(){
      // 清空缓存
      sessionStorage.clear();
      window.localStorage.clear();
      // 清空vuex中的状态
      this.$store.commit('logout');
      console.log('session',sessionStorage.getItem('uname'));
      console.log('localStorage',window.localStorage.getItem('isLogin'))
    },
  
  },
  computed:{
    isLogin(){
      // if(window.localStorage.getItem('uname')&&window.localStorage.getItem('isLogin')){
      //   this.$store.commit('userStatus',window.localStorage.getItem('uname'));
      // }else{
      //   // 登陆状态
      //   this.$store.commit('logout')
      // }
      if(sessionStorage.getItem('uname')&&sessionStorage.getItem('isLogin')){
        this.$store.commit('userStatus',sessionStorage.getItem('uname'));
      }else{
        // 登陆状态
        this.$store.commit('logout')
      }

      return this.$store.getters.isLogin;
    }
  }
}
</script>

<style scoped>
.login{
  /* width: 50px; */
  display: block;
  position: relative;
  top: 20px;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  width: 100%;
}
#app .el-menu-demo{
  /* background: rgba(0, 0, 0, 0.3); */
  box-shadow: 0px 0px 15px #989595;
  border: 0px;
  width: 100%;
  /* position: absolute;
  z-index: 10; */
}
#app .el-menu-demo a{
  text-decoration: none;
}
#app .el-menu-demo img{
  width: 60px !important;
  height: 60px !important;
}
#app .el-menu-demo li:nth-child(1)~li{
  margin-left:100px;
  margin-right:100px;  
}
</style>
