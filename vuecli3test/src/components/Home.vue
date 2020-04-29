<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log('created');
  //   document.title = '首页'
  // }
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('home created');
    // this.$router.push('/home/news')
  },
  destroyed() {
    console.log('home destroyed');
    
  },

  // activate()和deactivate()只有在keep-live前提下才能起作用
  activated() {
    this.$router.push(this.path)
  },

  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
}
</script>

<style>

</style>