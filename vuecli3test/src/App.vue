<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link to="/user/zhangsan" tag="button" replace>用户</router-link> -->
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+userid" replace>用户</router-link>
    <!-- <router-link to="/profile" replace>档案</router-link> -->
    <router-link :to="{path: '/profile', query: {name: 'what', age: 18, height: 1.88}}" replace>档案</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'lisi'
    }
  }
}
</script>

<style>
  .active {
    color: #f00;
  }
</style>
