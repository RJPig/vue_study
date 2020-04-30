<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
}
</script>

<style>
  #tab-bar {
    display: flex;
    background: #bdc3c7;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 2px rgba(0, 0, 0, .2); 

  }
</style>