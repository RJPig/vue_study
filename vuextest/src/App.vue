<template>
  <div id="app">
    <h2>APP内容</h2>
    <div>{{$store.state.counter}}</div>
    <div>{{$store.state.info}}</div>
    <button @click="updateInfo">修改信息</button>
    <h3>---------App内容: mutations相关信息--------</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h3>---------App内容: mutations相关信息,自定义参数--------</h3>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudents">添加学生</button>
    <h3>---------App内容: getters相关信息--------</h3>
    <div>{{$store.getters.powerCounter}}</div>
    <div>{{$store.getters.more20stu}}</div>
    <div>{{$store.getters.more20stuLength}}</div>
    <div>{{$store.getters.moreAgeStu(25)}}</div>
    <hello-vuex :counter="counter"/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // payload:负载
      // 下列为普通提交风格,这里的counte为数值
      this.$store.commit('incrementCount',count)
      // 特殊的提交风格,这里的count为对象
      // this.$store.commit({
      //   type: 'incrementCount',
      //   count
      // })
    },
    addStudents() {
      const stu = {name: 'which', age: 35}
      // console.log(this.$store.state.students);
      
      this.$store.commit('addStudents', stu)
    },
    updateInfo() {
      // 同步函数操作
      // this.$store.commit('updateInfo')
      // 异步函数操作
      this.$store.dispatch('aupdateInfo', '我是payload')
    }
  }
}
</script>

<style>

</style>
