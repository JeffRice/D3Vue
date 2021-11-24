<script>
import LineChartAxes from '../components/LineChartAxes'
export default {
  name: 'LargeLineChartAxes',
  components: {
    LineChartAxes
  },
  data() {
    return {
      data: [15, 14, 19, 12, 15, 18, 199, 17, 78, 25, 36, 92, 0, 25, 11, 99, 105]
      }
  },
}
</script>

<template>

  <section>

  <p>One of the strengths of Vue is the ability to re-use components throughout an application. Here we have a line chart component that is being reused 3 times to display the same array of data. The visualization is SVG based so it can scale 
  to fit the size of it's parent container!</p>
    <h3>{{ data }}</h3>


    <LineChartAxes
      v-bind="{ data }"
      style="width: 80%; border: 1px solid #ccc;"
    />
    

  </section>
</template>

<style>

</style>