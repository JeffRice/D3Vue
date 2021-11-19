<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="tinyLogo">
    <img alt="D3 logo" src="./assets/d3.svg" class="tinyLogo">
    <HelloWorld msg="Welcome to my Visualizations with Vue!"/>

        <div class="nav">
      <RouterLink to="/">Simple Linecharts 1</RouterLink> |
      <RouterLink to="/Example2">Simple Linecharts 2</RouterLink> |
      <RouterLink to="/Example3">Linecharts with Data Binding</RouterLink> |
      <RouterLink to="/finished">Interactive Circles</RouterLink>
    </div>
    <router-view />


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
h1 {
  margin-bottom: 0;
  font-size: 30px;
}
h2 {
  font-size: 20px;
}
.nav {
  padding: 16px 0 8px;
}
.nav a {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}

.tinyLogo {
  width: 50px;
}
</style>
