<script>
import LineChart from './LineChart'
export default {
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
  <span>
    <LineChart
      v-bind="{ data }"
    />
    <LineChart
      v-bind="{ data }"
    />
    <LineChart
      v-bind="{ data }"
    />
  </span>
</template>

<style>
.population {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>