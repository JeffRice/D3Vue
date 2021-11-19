<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      A collection of demos showing SVG and D3 visualizations with Vue
    </p>
    <ul>
    

      <li><a href="https://github.com/JeffRice/D3Vue" target="_blank" rel="noopener">View this app's code on Github</a></li>
      <li><a href="https://www.vuejs.org" target="_blank" rel="noopener">Vue.js documentation</a></li>
      <li><a href="https://D3js.org" target="_blank" rel="noopener">D3.JS documentation</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  padding: 20px;
}
</style>
