<script>
import * as d3 from 'd3';

export default {
  name: 'LineChartAxes',
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
      padding: 30,
    };
  },
  computed: {
    rangeX() {
      const width = this.width - this.padding;
      return [0, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [height, 0];
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
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    scale() {
      return this.path(this.data);
    },
  },
  async mounted () {
    const svg = d3.select('.line-chart1')
    const g = svg.append('g').attr('transform', 'translate(0, 0)')

 

        const dataset = this.data;
        const numberOfPoints = dataset.length;
    console.log('this set for the first chart: ', dataset);
    console.log('number of: ', numberOfPoints); 

    const y = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([this.height - this.padding, 0])
    const x = d3.scaleLinear()
    .domain([0, numberOfPoints])
    .range([0, this.width])


    g.append('g')
      .attr('transform', 'translate(' + this.padding + ',' + (this.height - this.padding + 10) + ')')
      .call(d3.axisBottom(x).ticks(7))
      .append('text')
      .attr('transform', 'translate(80, -20)')
      .attr('fill', '#000')
      .attr('y', 6)
      .attr('dy', '0.60em')
      .attr('text-anchor', 'end')
      .text('X-axis (index)')
    g.append('g')
      .attr('transform', 'translate(' + this.padding + ',' + 10 + ')')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.60em')
      .attr('text-anchor', 'end')
      .text('Y-axis ($)')

 

    console.log(svg)
    console.log(g)
  },
};
</script>

<template>
  <svg
    class="line-chart1"
    :viewBox="viewBox"
  >
    <g transform="translate(30, 10)">
      <path
        class="line-chart__line"
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

</style>