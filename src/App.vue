<template>
  <div id="app">
    <!-- <myHeader></myHeader> -->
    <headervue></headervue>
    <!-- <router-view></router-view> -->
    <!-- <my-foot></my-foot> -->
    <footvue></footvue>
  </div>
</template>

<script>
// import myHeader from './header/myHeader.vue'
// import myFoot from './foot/myFoot.vue'
export default {
  // components:{myHeader,myFoot}
}
</script>

<style scoped>
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
