<template>
  <v-layout id="wrapper" justify-center row wrap>
    <v-flex class="px-1 py-2" xs3>
      <v-card class="white--text" color="purple">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs3>
              <v-icon dark left x-large>flash_on</v-icon>
            </v-flex>
            <v-flex xs9>
              <div>
                <div class="title">{{ cpu }}%</div>
                <div class="subtitle-2">Uso da CPU</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-1 py-2" xs3>
      <v-card class="white--text" color="teal">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs3>
              <v-icon dark left x-large>memory</v-icon>
            </v-flex>
            <v-flex xs9>
              <div>
                <div class="title">{{ memory }}%</div>
                <div class="subtitle-2">Uso de Memória</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-1 py-2" xs3>
      <v-card class="white--text" color="blue-grey">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs3>
              <v-icon dark left x-large>network_check</v-icon>
            </v-flex>
            <v-flex xs9>
              <div>
                <div class="title">Tx: {{ tx }} MBps Rx: {{ rx }} MBps</div>
                <div class="subtitle-2">Tráfego na Rede</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-1 py-2" xs3>
      <v-card class="white--text" color="brown">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs3>
              <v-icon dark left x-large>power</v-icon>
            </v-flex>
            <v-flex xs9>
              <div>
                <div class="title">{{ uptime }} horas</div>
                <div class="subtitle-2">Uptime</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <doughnut-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <pie-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <custom-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <bar-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <radar-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md6 xs12>
      <v-card>
        <v-card-text>
          <scatter-example />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="py-8" xs12></v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

import BarExample from '../components/charts/BarExample'
import CustomExample from '../components/charts/CustomExample'
import DoughnutExample from '../components/charts/DoughnutExample'
import PieExample from '../components/charts/PieExample'
import RadarExample from '../components/charts/RadarExample'
import ScatterExample from '../components/charts/ScatterExample'

export default {
  components: { BarExample, CustomExample, DoughnutExample, PieExample, RadarExample, ScatterExample },
  data () {
    return {
      cpu: 0,
      memory: 0,
      uptime: 0,
      tx: 0,
      rx: 0,
      interval: null
    }
  },
  methods: {
    system () {
      var self = this

      axios.get('http://localhost:3000/totem/system').then((response) => {
        self.uptime = Math.floor(response.data.uptime / 3600)
        self.cpu = Math.round(response.data.cpu * 100)
        self.memory = Math.floor(response.data.memory)
        self.tx = Math.round(response.data.tx)
        self.rx = Math.round(response.data.rx)
      })
    }
  },
  mounted () {
    this.system()

    this.interval = setInterval(() => { this.system() }, 5000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 100%;
}

.link-btn {
  width: 150px;
}
</style>
