<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log('created');
  //   document.title = '关于'
  // }
  created() {
  console.log('about created');
    
  },
  destroyed() {
    console.log('about destroyed');
    
  }
}
</script>

<style>

</style>