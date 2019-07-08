import { Doughnut } from 'vue-chartjs'

const axios = require('axios')

export default {
  extends: Doughnut,
  data () {
    return {
      interval: null
    }
  },
  methods: {
    graph () {
      var self = this

      axios.get('http://localhost:3000/totem/disk').then((response) => {
        var used = 0
        var free = 0

        used = Math.round(response.data.used / (1024 * 1024))
        free = Math.round(response.data.free / (1024 * 1024))

        self.renderChart({
          labels: ['Espaço Ocupado', 'Espaço Disponível'],
          datasets: [
            {
              backgroundColor: [
                '#DD1B16',
                '#41B883'
              ],
              data: [used, free]
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        })
      })
    }
  },
  mounted () {
    this.graph()

    this.interval = setInterval(() => { this.graph() }, 60000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
