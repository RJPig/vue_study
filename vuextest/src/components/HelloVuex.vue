<template>
  <div>
    <h2>HelloVuex内容</h2>
    <div>{{$store.state.counter}}</div>
    <h3>--------HelloVuex中getters相关信息-------</h3>
    <div>乘积: {{$store.getters.powerCounter}}</div>
    <div>年龄大于20的有: {{$store.getters.more20stu}}</div>
    <div>人数: {{$store.getters.more20stuLength}}</div>
    <div>动态获取某个年龄范围限制: {{$store.getters.moreAgeStu(25)}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  props: {
    counter: Number
  }
}
</script>

<style>

</style>