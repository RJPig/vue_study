<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息内容</p>
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log('created');
  //   document.title = '用户'
  // }
  
  created() {
  console.log('user created');
    
  },
  destroyed() {
    console.log('user destroyed');
    
  }
}
</script>

<style>

</style>