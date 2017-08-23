<template lang="html">
<div>
  <el-row>
    <el-menu theme="dark" :default-active="$router.path" class="el-menu" mode="horizontal" :router="false">
    <el-menu-item index="1" @click="collapse">管理系统</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.baidu.com" target="_blank">baiu</a></el-menu-item>
    </el-menu>
    <el-breadcrumb separator="/" style="padding: 20px 20px 20px 20px;">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/adminArticleList' }">xxx</el-breadcrumb-item>
      <el-breadcrumb-item>xxx</el-breadcrumb-item>
      <el-breadcrumb-item>xxx</el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
  <el-row  type="flex">
      <el-menu :default-active="$router.index" :router="true" mode="vertical" :collapse="isCollapse">
        <el-menu-item index="/admin/adminArticleList">
          <i class="el-icon-menu"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/admin/adminArticle">
          <i class="el-icon-setting"></i>
          <span slot="title">新建文章</span>
        </el-menu-item>
      </el-menu>
      <el-col :span="24" class="row-bg">
      <transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
      </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
    }
  },
  watch:{
    "$route" : 'checkLogin'
  },
  created () {
    this.checkLogin();
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    checkLogin(){
      if(!this.getCookie('user')){
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style lang="css">
a {
  text-decoration: none;
}
.row-bg {
    /*background-color: #f9fafc;*/
    background-color: #99a9bf;
    width: 100%;
    height: 837px;
    border-radius: 2px;
}
</style>
