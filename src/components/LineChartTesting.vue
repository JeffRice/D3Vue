<script>
import * as d3 from 'd3';
import defaultOptions from './defaultOptions'

export default {
  name: 'LineChart2',
  props: {
    data: {
      required: true,
      type: Array,
    },
    width: {
      default: 500,
      type: Number,
    },
    height: {
      default: 270,
      type: Number,
    },
    axisTicks: {
      default: 5,
      type: Number,
    },
    domain: { min: null,
     max: null },
    options: {
      type: Object,
      default: () => {
        return Object.assign({}, defaultOptions)
      }
    }
  },
  data() {
    return {
      padding: 60,
      opts: Object.assign({}, defaultOptions)
    };
  },
  computed: {
    rangeX() {
      const width = this.width - this.padding;
      return [0, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [0, height];
    },
    path() {
      const x = d3.scaleLinear().range(this.rangeX);
      const y = d3.scaleLinear().range(this.rangeY);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    },
    line() {
      return this.path(this.data);
    },
    max () {
      const { max } = this.opts.domain
      const { yValues } = this
      return (max === null || max === undefined) ? d3.max(yValues) : max
    },
    axisY () {
      let ticks = this.opts.axisTicks
      ticks = (ticks <= this.max) ? ticks : this.max
      const axis = []
      const scaleV = d3.scaleLinear()
        .domain([0, ticks])
        .rangeRound([this.min, this.max])
      const scaleY = d3.scaleLinear()
        .domain([0, ticks])
        .rangeRound([this.hh, 0])
      for (let i = 0; i <= ticks; i++) {
        const v = scaleV(i)
        axis.push({
          v: v,
          value: this.formatY(v),
          y: scaleY(i)
        })
      }
      return axis
    },
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    scale() {
      return this.path(this.data);
    },
  },
};
</script>

<template>
  <svg
    class="line-chart"
    :viewBox="viewBox"
    transform=""
  >







    <g transform="translate(0, 200) scale(1, -1)">
      <path
        class="line-chart__linealt"
        :d="line"
      />
    </g>
 



  </svg>
</template>

<style scoped>
.line-chart__line{
  margin: 25px;
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;}

.line-chart__line-alt {
    margin: 25px;
    fill: none;
    stroke: #b55ce4;
    stroke-width: 3px;
}

</style>