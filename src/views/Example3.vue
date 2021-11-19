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
      },
      newValue : 0
    }
  },
    methods: {

    onClick(data, newValue) {
      console.log('clicked!', data, newValue)

      data.push(newValue);
     console.log('added?!', data)

    },
    shiftData(data) {
      console.log('clicked!', data)

      data.shift();
     console.log('shifter?!', data)

    },
    randomData(data) {
    

   //  Need to splice individual elements since assigning a new array doesn't work with reactivity
      var index=0;
      data.forEach(function(item){
        item = Math.floor(Math.random() * 100);
        data.splice(index, 1, item);
        index++;
})


  console.log( data);

    }

  }
}
</script>

<template>
<div>

  <section class="form-inputs">
        <p>
          Update Data For a given line. The first row of text inputs and sliders correlate to the line chart beneath them. You can manually 
          enter a number or use the slider to select a new value for one of the inputs of the line charts data points. Since the data is bound 
          to these inputs the visualization will automatically update when the data changes. Again this still only uses one line chart component
          for all examples!
        </p>
        <p>
          Then each button performs a different update on the charts data. The first chart allows you to input a new value and add it to the end 
          of the dataset. The second chart Button will remove data points from the beginning of the dataset. The third button will generate all 
          random points for the dataset.
        </p>

        <div class="span-33">
             Chart 1, first input<br /><input v-model.number="data.linesList[0].array[0]" /><br />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[0].array[0]">
            {{ data.linesList[0].array[0] }}<br />
            <input v-model.number="newValue" /><button @click="onClick(data.linesList[0].array, newValue)">Add Data</button><br />
        </div>
        <div class="span-33">
            Chart 2, fourth input <br /><input v-model.number="data.linesList[1].array[3]" /><br />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[1].array[3]">
            {{ data.linesList[1].array[3] }}<br />
            <button @click="shiftData(data.linesList[1].array)">Remove Data</button><br />
        </div>
        <div class="span-33">
            Chart 3, fifth input <br /><input v-model.number="data.linesList[2].array[6]" /><br />
            <input id="margin-x" class="form-control" type="range" min="0" max="100" v-model.number="data.linesList[2].array[6]">
            {{ data.linesList[2].array[6] }}<br />
            <button @click="randomData(data.linesList[2].array)">Randomize Data</button><br />
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
.line-chart__linealt {
    margin: 25px;
    fill: none;
    stroke: #b55ce4;
    stroke-width: 3px;
}
.span-33 {
  width: 33%;
  float: left;
  min-height: 150px;
}
.form-inputs {
  padding: 20px;
  clear: both;
}
</style>