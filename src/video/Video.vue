<template>
  <div class="container">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><a href="javascript:;"><img src="../assets/logo.png" ></a></el-menu-item>
  <el-menu-item index="2"><a href="javascript:;">首页</a></el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title"><a href="javascript:;">首页</a></template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="3">
    <el-submenu index="4">
      <template slot="title">赛车</template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu-item>
  
  <el-menu-item index="5"><a href="javascript:;" target="_blank">赛事新闻</a></el-menu-item>
</el-menu>
  </div>
</template>

<style>
  img{
    width: 60px;
    height: 60px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
   export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>