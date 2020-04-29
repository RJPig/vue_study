<template>
  <div>
    <h2>我是档案</h2>
    <p>我是档案内容</p>
    <!-- 这里的route是指当前活跃的路由器对象,即当档案被点击时,是处于活跃状态 -->
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  // created() {
  //   console.log('created');
  //   document.title = '档案'
  // }

  created() {
    console.log('profile created');
    
  },
  destroyed() {
    console.log('profile destroyed');
    
  }
}
</script>

<style>

</style>