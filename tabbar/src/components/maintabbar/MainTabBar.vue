<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot="item-icon" src="" alt="">
      <img slot="item-icon-active" src="" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <img slot="item-icon" src="" alt="">
      <img slot="item-icon-active" src="" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deeppink">
      <img slot="item-icon" src="" alt="">
      <img slot="item-icon-active" src="" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="" alt="">
      <img slot="item-icon-active" src="" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>