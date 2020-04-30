<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>

</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // 在vue路由中,无法重复访问同一路径,在后面添加.catch(err => err)可解决报错问题
      this.$router.push(this.path).catch(err => err);
      
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    border-right: 1px solid #95a5a6;   
    font-size: 14px;
  }
  .tab-bar-item:last-child {
    border-right: 0;
  }

</style>