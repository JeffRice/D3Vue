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

  <p>We have shown that a line can be scaled to fit it's parent container, but what about axis lines? Here we are defining the axes based on the data passed to the visualization. If the amount of values change or the range within the values the axis will change and be responsive to the container.</p>
    <h3>{{ data }}</h3>


    <LineChartAxes
      v-bind="{ data }"
      style="width: 80%; border: 1px solid #ccc;"
    />
    

  </section>
</template>

<style>

</style>