<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="page-title"><a href="#/">开发组件库</a></h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  @import './assets/css/App.css';
</style>
