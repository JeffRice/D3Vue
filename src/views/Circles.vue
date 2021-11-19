<script>
import dataset from './dataset.json'
export default {
  name: 'Circles',
  props: {
    width: {
      default: 600,
      type: Number,
    },
    height: {
      default: 600,
      type: Number,
    }
  },
  data() {
    return {
      dataset
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },

  },

  methods: {
    onClick(item) {
      console.log('hey there', item)
    },

  }
}
</script>

<template>

  <p> This is creating SVG circles based on a set of points given to the component. Then a line is drawn with D3 to connect them. If you hover or click on a circle a random color will be generated to fill the circle. Also clicking changes the type of curve applied by D3
  </p>
  <svg transform="rotate(180) scale(1, -1)" :viewBox="viewBox">
    <circle
      v-for="(item, index) in dataset"
      :key="index"
      :cx="item[0]"
      :cy="item[1]"
      r="10"
      fill="#000"
      @click="onClick(item)"
    />
  </svg>
</template>
