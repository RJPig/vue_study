import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {
      name: 'why', age: 20
    },
    {
      name: 'what', age: 24
    },
    {
      name: 'who', age: 30
    }
  ],
  info: {
    name: 'Eng',
    age: 20,
    height: 1.88
  }
}
const store = new Vuex.Store({
  // state存储共同内容,响应式
  state,
  // mutations用于存放同步函数操作
  mutations,
  // actions用于存放异步函数操作
  actions,
  // getters类似于计算属性,用来过滤数据
  getters,
  modules: {
    a: moduleA
  }
})

export default store