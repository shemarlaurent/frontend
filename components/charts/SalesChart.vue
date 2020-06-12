
<script>
  import { Line } from 'vue-chartjs'
  export default {
    name: 'SalesChart',
    extends: Line,
    props: {
      data: {
        default() {
          return {};
        }
      },
      options: {
        type: Object,
        default: null
      }
    },

    mounted () {
      this.renderChart(this.data, {
        responsive: !0,
          maintainAspectRatio: !0,
          scales: {
          xAxes: [{ display: !1 }],
            yAxes: [{
            display: !0,
            ticks: {
              display: !1,
              stepSize: 100,
              min: 100,
              max: 700,
              padding: 0,
              beginAtZero: !0,
              fontSize: 12,
              fontFamily: '\'Roboto\', sans-serif',
              fontColor: '#929292',
              fontStyle: '500'
            },
            gridLines: { drawBorder: !1, color: 'rgb(93,93,93,0.2)' }
          }]
        },
        legend: {
          display: !1, legendCallback: function(e) {
            var t = []
            t.push('<ul class="legend-list">')
            for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span class="legend-dots" style="background:' + e.data.datasets[a].legendColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push('</li>')
            return t.push('</ul>'), t.join('')
          }
        },
        layout: { padding: { right: 0, top: 0, bottom: 0 } },
        elements: { point: { radius: 0 }, line: { tension: 0 } }
      })
    }
  }
</script>

<style scoped>

</style>
