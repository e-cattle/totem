import { Pie } from 'vue-chartjs'

const axios = require('axios')

export default {
  extends: Pie,
  beforeMount () {
    this.config = {
      headers: { 'Authorization': 'Bearer ' + this.$session.get('TOKEN') }
    }
  },
  mounted () {
    var self = this

    const colors = ['#41B883', '#E46651', '#00D8FF', '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080']

    axios.get('http://localhost:3000/totem/count-by-type', this.config).then((response) => {
      let labels = response.data.map(o => o.label)
      let counts = response.data.map(o => o.total)
      self.renderChart({
        labels: labels,
        datasets: [
          {
            backgroundColor: colors,
            data: counts
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
