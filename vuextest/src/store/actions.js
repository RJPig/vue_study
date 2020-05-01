export default  {
  aupdateInfo(context, payload) {
    setTimeout(() => {
      context.commit('updateInfo')
      console.log(payload);
      
    }, 1000)
  }
} 

