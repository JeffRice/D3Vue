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

  <section class="form-inputs">
        <label>
          Update Data For A given line <br /><br />
        </label>

        <div class="span-33">
             Chart 1, first input<input v-model.number="data.linesList[0].array[0]" /><br />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[0].array[0]">
            {{ data.linesList[0].array[0] }}
        </div>
        <div class="span-33">
            Chart 2, fourth input <input v-model.number="data.linesList[1].array[3]" />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[1].array[3]">
            {{ data.linesList[1].array[3] }}
        </div>
        <div class="span-33">
            Chart 3, fifth input <input v-model.number="data.linesList[2].array[6]" />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[2].array[6]">
            {{ data.linesList[2].array[6] }}
        </div>



  </section>
<LineChart
      v-for="item in data.linesList"
      v-bind:data="item.array"
      v-bind:key="item.id"
      class="span-33"
    ></LineChart>
 
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

.span-33 {
  width: 33%;
  float: left;
}

.form-inputs {
  padding: 20px;
  clear: both;
}

</style>