<script>
import LineChart2 from './LineChart2'
export default {
  components: {
    LineChart2
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

        <label>
          Update Data? <br />
        </label>

        <input
            v-model.number="data.linesList[0].array[0]"
          />

     


        <button v-on:click="$emit('enlarge-text')">
        Enlarge text
        </button>







<LineChart2
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
    ></LineChart2>



    
</span>    
</template>
<style>
.line-chart__line {
    margin: 25px;
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
}

.line-chart__line-alt {
    margin: 25px;
    fill: none;
    stroke: #b55ce4;
    stroke-width: 3px;
}
</style>