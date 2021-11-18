<script>
import LineChart2 from '../components/LineChart2'
export default {
  components: {
    LineChart2
  },
  data() {
    return {
      data: {
        linesList: [
         { id: 0, array: [1, 10, 28, 25, 36, 42, 33, 55, 71, 99, 105] },
         { id: 1, array: [19, 22, 7, 15, 3, 9, 3, 16, 11, 21, 23] },
         { id: 2, array: [199, 171, 78, 75, 36, 42, 33, 25, 11, 9, 10] }
      ]
      }
    }
  }
}
</script>

<template>
<div>

  <div class="form-inputs">
        <label>
          Update Data For A given line <br />
        </label>

        Chart 1, first input<input
            v-model.number="data.linesList[0].array[0]"
          /><br />
        Chart 2, fourth input<input
            v-model.number="data.linesList[1].array[3]"
          /><br />
         Chart 3, fifth input<input
            v-model.number="data.linesList[2].array[6]"
          /><br />

  </div>
<LineChart2
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
      class="span-25"
    ></LineChart2>
 
</div>    
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

.span-25 {
  width: 25%;
}

.form-inputs {
  padding: 20px;
}

</style>