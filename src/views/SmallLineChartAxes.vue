<script>
import LineChartAxes2 from '../components/LineChartAxes2'
export default {
  name: 'SmallLineChartAxes',
  components: {
    LineChartAxes2
  },
  data() {
    return {
      data: [14, 18, 78, 25, 36, 64, 0, 25, 11]
    }
  },
}
</script>

<template>

  <section>

  <p>In the second example we are using the same code to create a Linechart similar to the one above it. The only difference is giving it a different data array and giving it's container a different width. The axes are automatically scaled to the new data and it all responds to the container size. Resizing the browser will scale everything in the visualization.</p>
    <h3>{{ data }}</h3>


    <LineChartAxes2
      v-bind="{ data }"
      style="width: 50%; border: 1px solid #ccc;"
    />

  </section>
</template>

<style>

</style>