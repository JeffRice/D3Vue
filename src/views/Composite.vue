<script>
 import SmallLineChartAxes from '../views/SmallLineChartAxes'
 import LargeLineChartAxes from '../views/LargeLineChartAxes'
import plotWithXandY from '../components/plotWithXandY'

export default {
  name: 'Composite',
  components: {
     plotWithXandY, SmallLineChartAxes, LargeLineChartAxes
  },
  data() {
    return {
    }
  }
}
</script>

<template>

  <section>


        <LargeLineChartAxes></LargeLineChartAxes>
        <SmallLineChartAxes></SmallLineChartAxes>
        <plotWithXandY :height="400"></plotWithXandY>



  </section>
</template>

<style>

</style>