<script>
import LineChart from '../components/LineChart'
export default {
  components: {
    LineChart
  },
  data() {
    return {
      data: [[10, 60], [40, 90], [60, 10], [190, 10]]
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