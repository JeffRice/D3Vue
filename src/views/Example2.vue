<script>
import LineChart from '../components/LineChart'
import LineChart2 from '../components/LineChart2'
export default {
  components: {
    LineChart, LineChart2
  },
  data() {
    return {
      data: {



        linesList: [
         { id: 0, array: [1, 10, 28, 25, 36, 42, 33, 55, 71, 99, 105] },
         { id: 1, array: [19, 71, 7, 2, 3, 9, 3, 25, 11, 99, 105] },
         { id: 2, array: [199, 171, 78, 75, 36, 42, 33, 25, 11, 9, 10] }
      ]
      }
    }
  }
}
</script>

<template>
<section>

  <p>Here the same line chart component is rendered 3 times, but each one is given a different data input. Then a similar component renders the data again only changing the line color.</p>

<LineChart
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
      style="width: 30%"
    ></LineChart>

<LineChart2
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
      style="width: 30%"
    ></LineChart2>

    
</section>    
</template>
