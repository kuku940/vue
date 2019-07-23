<template>
  <div class="Page1">
    <h1>{{ msg }}</h1>

    <a href="/#/PageIndex/page2">page 2</a>
  </div>
</template>

<script>
  export default {
    name: 'Page1',
    data () {
      return {
        msg: 'Page One'
      }
    }
  }
</script>

<style scoped>

</style>
