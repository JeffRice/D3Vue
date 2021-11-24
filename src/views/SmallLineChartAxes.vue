<script>
import LineChartAxes2 from '../components/LineChartAxes2'
export default {
  name: 'SmallLineChartAxes',
  components: {
    LineChartAxes2
  },
  data() {
    return {
      data: [14, 18, 78, 25, 36, 64, 0, 25, 11, 43, 77]
    }
  },
}
</script>

<template>

  <section>

  <p>One of the strengths of Vue is the ability to re-use components throughout an application. Here we have a line chart component that is being reused 3 times to display the same array of data. The visualization is SVG based so it can scale 
  to fit the size of it's parent container!</p>
    <h3>{{ data }}</h3>


    <LineChartAxes2
      v-bind="{ data }"
      style="width: 30%; border: 1px solid #ccc;"
    />

  </section>
</template>

<style>

</style>