<script>
import * as d3 from 'd3';

export default {
  name: 'LineChartAxes2',
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
    const svg = d3.select('.line-chart2')
  //  const padding = 20;
  //  const width = +svg.attr('width') - margin.left - margin.right
  //  const height = +svg.attr('height') - margin.top - margin.bottom
    const g = svg.append('g').attr('transform', 'translate(0, 0)')


/*
    const parseTime = d3.timeParse('%d-%b-%y')

    const x = d3.scaleTime().rangeRound([0, width])

    const y = d3.scaleLinear().rangeRound([height, 0])

      

    const line = d3
      .line()
      .x(function (d) {
        return x(parseTime(d.date))
      })
      .y(function (d) {
        return y(d.close)
      })

    const data = [
      { date: '24-Apr-07', close: 93.24 },
      { date: '25-Apr-07', close: 95.35 },
      { date: '26-Apr-07', close: 98.84 },
      { date: '27-Apr-07', close: 99.92 },
      { date: '30-Apr-07', close: 99.80 },
      { date: '1-May-07', close: 99.47 },
      { date: '2-May-07', close: 100.39 },
      { date: '3-May-07', close: 100.40 },
      { date: '4-May-07', close: 100.81 },
      { date: '7-May-07', close: 103.92 },
      { date: '8-May-07', close: 105.06 },
      { date: '9-May-07', close: 106.88 },
      { date: '10-May-07', close: 107.34 }
    ]


        x.domain(
      d3.extent(data, function (d) {
        return parseTime(d.date)
      })
    )
    y.domain(
      d3.extent(data, function (d) {
        return d.close
      })
    )
    */







        const dataset = this.data;
        const numberOfPoints = dataset.length;
    console.log('this set for the first chart: ', dataset);
    console.log('number of: ', numberOfPoints); 

  //  const x = d3.scaleLinear().rangeRound([0, this.width])
 //   const y = d3.scaleLinear().rangeRound([this.height, 0])
    const y = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([this.height - this.padding, 0])
    const x = d3.scaleLinear()
    .domain([0, numberOfPoints])
    .range([0, this.width + 10])


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
    class="line-chart2"
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