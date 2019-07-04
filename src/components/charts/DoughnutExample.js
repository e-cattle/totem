import { Doughnut } from 'vue-chartjs'

const axios = require('axios')

export default {
  extends: Doughnut,
  mounted () {
    var self = this

    axios.get('http://localhost:3000/totem/disk').then((response) => {
      var used = Math.round(response.data.used / (1024 * 1024))
      var free = Math.round(response.data.free / (1024 * 1024))

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
}
