<template>
  <div id="app">
     <Nav />
      <div id="main">
       <RouterView></RouterView>
      </div>
</div>
</template>

<script>
import Nav from './components/nav.vue'
import add from './components/add.vue'
import userdata from'./components/userdata.vue'

export default {
  name: 'App',
  components: {
    Nav,
    add,
    userdata,
  }
}
</script>

<style>
</style>