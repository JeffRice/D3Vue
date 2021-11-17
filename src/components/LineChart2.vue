<script>
import * as d3 from 'd3';

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
    }
  },
  data() {
    return {
      padding: 60,
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

      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    },
    line() {
      return this.path(this.data);
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
        class="line-chart__line"
        :d="line"
      />
    </g>
    <g transform="translate(0, 50)">
      <path
        class="line-chart__line"
        :d="line"
      />
      </g>


  <g class="tick" opacity="1" transform="translate(176.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.5</text>
  </g>      



  </svg>
</template>

<style scoped>
.line-chart__line{
  margin: 25px;
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;}

</style>