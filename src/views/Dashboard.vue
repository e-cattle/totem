<template>
  <v-layout id="wrapper" justify-center row wrap>
    <v-flex class="px-1 py-2" xs3>
      <v-card class="white--text" color="purple">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs3>
              <v-icon dark left x-large>speed</v-icon>
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
            <v-flex xs5 class="py-0">
              <v-chip label dark color="blue-grey">
                <v-icon left>cloud_upload</v-icon>
                {{ tx }}
              </v-chip>
            </v-flex>
            <v-flex xs7 class="py-0">
              <v-chip label dark color="blue-grey">
                <v-icon left>cloud_download</v-icon>
                {{ rx }}
              </v-chip>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 class="py-0">
              <div class="subtitle-2 my-0 py-0">Tráfego na Rede (Mbps)</div>
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

    <v-flex class="pa-2" xs6>
      <v-card>
        <v-card-text>
          <disk-usage />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="pa-2" xs6>
      <v-card>
        <v-card-text>
          <sensor-type />
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
import DiskUsage from '../components/charts/DiskUsage'
import SensorType from '../components/charts/SensorType'
import RadarExample from '../components/charts/RadarExample'
import ScatterExample from '../components/charts/ScatterExample'

export default {
  components: { BarExample, CustomExample, DiskUsage, SensorType, RadarExample, ScatterExample },
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
