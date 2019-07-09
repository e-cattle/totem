import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      gradients: [],
      gradient1: null,
      gradient2: null,
      colors: [
        { border: '#B71C1C', base: '183, 28, 28' },
        { border: '#4A148C', base: '74, 20, 140' },
        { border: '#81B1FF', base: '129, 177, 255' },
        { border: '#004D40', base: '0, 77, 64' },
        { border: '#1C5E20', base: '28, 94, 32' },
        { border: '#E65000', base: '230, 80, 0' },
        { border: '#3E2723', base: '62, 39, 35' },
        { border: '#263339', base: '38, 51, 57' },
        { border: '#827618', base: '130, 118, 24' },
        { border: '#005F63', base: '0, 95, 99' }
      ]
    }
  },
  mounted () {
    this.generateGradients(this.data.length)

    var datasets = []

    for (var i = 0; i < this.data.length; i++) {
      var aux = {
        label: this.data[i].label,
        borderColor: this.colors[i % 10].border,
        pointBackgroundColor: 'white',
        borderWidth: 1,
        pointBorderColor: 'white',
        backgroundColor: this.gradients[i],
        data: this.data[i].data
      }

      datasets.push(aux)
    }

    this.renderChart({
      labels: ['14/7', '15/7', '16/7', '17/7', '18/7', '19/7', 'Hoje'],
      datasets: datasets
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: '#ffffff'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#fff'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#fff'
          }
        }]
      }
    })
  },
  methods: {
    generateGradients (size) {
      for (var i = 0; i < size; i++) {
        var j = i % 10

        var g = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

        g.addColorStop(0, 'rgba(' + this.colors[j].base + ', 0.6)')
        g.addColorStop(0.5, 'rgba(' + this.colors[j].base + ', 0.3)')
        g.addColorStop(1, 'rgba(' + this.colors[j].base + ', 0)')

        this.gradients.push(g)
      }
    }
  }
}
