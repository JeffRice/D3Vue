<script>
import LineChart from '../components/LineChart'
export default {
  name: 'Example',
  components: {
    LineChart
  },
  data() {
    return {
      data: [199, 171, 78, 25, 36, 92, 33, 25, 11, 99, 105]
    }
  }
}
</script>

<template>

  <section>

  <p>One of the strengths of Vue is the ability to re-use components throughout an application. Here we have a line chart component that is being reused 3 times to display the same array of data. The visualization is SVG based so it can scale 
  to fit the size of it's parent container!</p>


    <LineChart
      v-bind="{ data }"
      style="width: 30%; border: 1px solid #ccc;"
    />
    <LineChart
      v-bind="{ data }"
      style="width: 30%; border: 1px solid #ccc;"
    />


    <LineChart
      v-bind="{ data }"
      style="width: 80%; border: 1px solid #ccc;"
    />

  </section>
</template>

<style>
.population {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>