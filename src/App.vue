<template>
  <div>
    <StoriesList></StoriesList>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import StoriesList from './components/StoriesList/StoriesList.vue';

export default {
  name: 'App',
  components: {
    StoriesList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
