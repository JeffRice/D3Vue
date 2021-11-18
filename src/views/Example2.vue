<script>
import LineChart from '../components/LineChart'
export default {
  components: {
    LineChart
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
<span>

<LineChart
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
    ></LineChart>

    
</span>    
</template>
