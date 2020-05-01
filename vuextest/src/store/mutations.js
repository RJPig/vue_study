export default {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  // 自定义参数
  incrementCount(state, count) {
    state.counter += count
  },
  addStudents(state, stu) {
    state.students.push(stu)
  },
  // 响应式
  updateInfo(state) {
    // 该方法没有响应式
    // state.info['address'] = 'England'
    // 该方法就有响应式
    Vue.set(state.info, 'address', '洛杉矶')
    // Vue.delete(state.info, 'age')
  }
}