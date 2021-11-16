<template>
  <svg :viewBox="viewBox">
    <path
      stroke="rgba(146, 55, 255, 0.5)"
      fill="none"
      stroke-width="5"
      :d="d"
    />
    <circle
      r="10"
      v-for="(item, index) in dataset"
      @mouseover="onMouse"
      :cx="item[0]"
      :cy="item[1]"
      :key="index"
      :fill="randomRgb"
      @click="onClick"

    />
  </svg>
</template>

<script>
import * as d3 from 'd3-shape'
//import shuffle from 'lodash/shuffle'
import dataset from './dataset.json'
export default {
  name: 'ConnectingDots',
  props: {
    width: {
      default: 500,
      type: Number,
    },
    height: {
      default: 270,
      type: Number,
    }
  },
  data() {
    return {
      dataset,
      curve: 'curveStepAfter'
    }
  },
  methods: {

        onClick(item) {
      console.log('this is the item2!', item, this)
      this.curve =
        this.curve === 'curveStepAfter' ? 'curveStepBefore' : 'curveStepAfter'

      // Let's flip the data just cause!
      //this.dataset = shuffle(this.dataset)

      const o = Math.round, r = Math.random, s = 255;
      item.target.style.fill = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    },
    onMouse(item) {
      console.log('moused over item', item, 'moused over this',this)
      console.log(item.target)

      // set fill color to a random RGB value on hover
      const o = Math.round, r = Math.random, s = 255;
      item.target.style.fill = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
  },
  computed: {
      viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    lineGenerator() {
      return d3
        .line()
        .curve(d3[this.curve])
        .x(v => v[0])
        .y(v => v[1])
    },
    d() {
      return this.lineGenerator(this.dataset)
    },
    randomRgb () {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
  }
}
</script>

<style scoped>
path,
circle {
  transition: all 500ms ease;
}
</style>
