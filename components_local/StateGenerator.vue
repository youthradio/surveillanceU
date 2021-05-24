<template>
  <svg ref="svg" />
</template>

<script>
import * as topojson from 'topojson-client'
import * as d3Selection from 'd3-selection'
import * as d3Geo from 'd3-geo'
import us from './map.json'

const d3 = Object.assign({}, d3Selection, d3Geo)

export default {
  props: {
    width: { type: Number, default: 65 },
    padding: { type: Number, default: -10 },
    margin: { type: Number, default: 2 },
    stateCode: { type: String, required: true },
    stateName: { type: String, required: true },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    this.getState(
      this.$refs.svg,
      this.stateName,
      this.stateCode,
      this.width,
      this.padding,
      this.margin
    )
  },
  methods: {
    getState(svgEle, name, stateCode, width, padding, margin) {
      const feature = topojson
        .feature(us, us.objects.states)
        .features.find((e) => e.properties.name === name)

      const projection = d3.geoIdentity().fitExtent(
        [
          [-padding, -padding],
          [width + padding, width + padding],
        ],
        feature
      )

      const path = d3.geoPath().projection(projection)

      //   const [[x0, y0], [x1, y1]] = path.bounds(feature)
      //   const [xc, yc] = path.centroid(feature)

      const svg = d3
        .select(svgEle)
        .attr('viewBox', [
          -margin,
          -margin,
          width + 2 * margin,
          width + 2 * margin,
        ])
        // .attr('width', width + margin * 2)
        .attr('class', 'state')
        .style('width', '100%')
        .style('max-width', width + margin * 2)

      const g = svg.append('g').attr('class', 'boundaries')

      g.append('rect')
        .attr('width', width)
        .attr('height', width)
        .attr('rx', '10')
        .attr('fill', 'none')

      g.selectAll('title')
        .data([feature])
        .join('title')
        .text((d) => `${d.properties.name}`)

      g.selectAll('path')
        .data([feature])
        .join('path')
        .attr('fill', (d) => 'white')
        .attr('d', path)
        .attr('class', 'state-path')

      g.selectAll('text')
        .data([feature])
        .join('text')
        .attr('x', 4)
        .attr('y', width - 4)
        .attr('stroke', 'none')
        .attr('alignment-baseline', 'baseline')
        .text((d) => stateCode)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables';

.state {
  font-weight: 700;
  font-size: 12px;
  fill: $purple;
  stroke: $purple;
  stroke-width: 1;
  &:hover {
    cursor: pointer;
    /deep/ .state-path {
      fill: $purple;
    }
  }
}
/deep/ .state-text {
  // text-anchor: middle;
}
</style>
