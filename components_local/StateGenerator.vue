<template>
  <svg ref="svg" />
</template>

<script>
import * as topojson from 'topojson-client'
import * as d3Selection from 'd3-selection'
import * as d3Geo from 'd3-geo'
import us from './map.json'
// import data from './petitions-data.json'

const d3 = Object.assign({}, d3Selection, d3Geo)

// const statesCodes = {
//   Alabama: 'AL',
//   Alaska: 'AK',
//   'American Samoa': 'AS',
//   Arizona: 'AZ',
//   Arkansas: 'AR',
//   California: 'CA',
//   Colorado: 'CO',
//   Connecticut: 'CT',
//   Delaware: 'DE',
//   'District of Columbia': 'DC',
//   'Federated States Of Micronesia': 'FM',
//   Florida: 'FL',
//   Georgia: 'GA',
//   Guam: 'GU',
//   Hawaii: 'HI',
//   Idaho: 'ID',
//   Illinois: 'IL',
//   Indiana: 'IN',
//   Iowa: 'IA',
//   Kansas: 'KS',
//   Kentucky: 'KY',
//   Louisiana: 'LA',
//   Maine: 'ME',
//   'Marshall Islands': 'MH',
//   Maryland: 'MD',
//   Massachusetts: 'MA',
//   Michigan: 'MI',
//   Minnesota: 'MN',
//   Mississippi: 'MS',
//   Missouri: 'MO',
//   Montana: 'MT',
//   Nebraska: 'NE',
//   Nevada: 'NV',
//   'New Hampshire': 'NH',
//   'New Jersey': 'NJ',
//   'New Mexico': 'NM',
//   'New York': 'NY',
//   'North Carolina': 'NC',
//   'North Dakota': 'ND',
//   'Northern Mariana Islands': 'MP',
//   Ohio: 'OH',
//   Oklahoma: 'OK',
//   Oregon: 'OR',
//   Palau: 'PW',
//   Pennsylvania: 'PA',
//   'Puerto Rico': 'PR',
//   'Rhode Island': 'RI',
//   'South Carolina': 'SC',
//   'South Dakota': 'SD',
//   Tennessee: 'TN',
//   Texas: 'TX',
//   Utah: 'UT',
//   Vermont: 'VT',
//   'Virgin Islands': 'VI',
//   Virginia: 'VA',
//   Washington: 'WA',
//   'West Virginia': 'WV',
//   Wisconsin: 'WI',
//   Wyoming: 'WY',
// }

export default {
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    this.getState(this.$refs.svg, 'New York', 'NY', 100, -10, 5)
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
        .attr('width', width + margin * 2)
        .attr('class', 'state')

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
        .attr('x', margin + Math.abs(padding))
        .attr('y', width - margin)
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
  fill: $purple;
  stroke: $purple;
  stroke-width: 1;
  text-anchor: middle;
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
