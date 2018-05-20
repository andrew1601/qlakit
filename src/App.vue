<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <router-link to="/">Home</router-link>
    <router-link to="/analysis">Analysis</router-link>

    <router-view class="main-content container"></router-view>
  </div>
</template>

<script>
import AppNavBar from './components/shared/NavBar.vue'

export default {
  name: 'app',
  components: {
    AppNavBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .main-content {
    padding: 2.857142857rem 1rem;
  }
</style>
