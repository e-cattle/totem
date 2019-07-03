<template>
  <v-layout id="wrapper" justify-center row wrap>
    <v-flex class="px-2 py-2" md3 xs6>
      <v-card class="white--text" color="purple">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs5>
              <v-icon dark right x-large>flash_on</v-icon>
            </v-flex>
            <v-flex xs7>
              <div>
                <div class="headline">37%</div>
                <div>Uso da CPU</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md3 xs6>
      <v-card class="white--text" color="teal">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs5>
              <v-icon dark right x-large>memory</v-icon>
            </v-flex>
            <v-flex xs7>
              <div>
                <div class="headline">94%</div>
                <div>Uso de Memória</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md3 xs6>
      <v-card class="white--text" color="blue-grey">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs5>
              <v-icon dark right x-large>network_check</v-icon>
            </v-flex>
            <v-flex xs7>
              <div>
                <div class="headline">53 Mbps</div>
                <div>Tráfego na Rede</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex class="px-2 py-2" md3 xs6>
      <v-card class="white--text" color="brown">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs5>
              <v-icon dark right x-large>power</v-icon>
            </v-flex>
            <v-flex xs7>
              <div>
                <div class="headline">743 horas</div>
                <div>Uptime</div>
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
  </v-layout>
</template>

<script>
import BarExample from '../components/charts/BarExample'
import CustomExample from '../components/charts/CustomExample'
import DoughnutExample from '../components/charts/DoughnutExample'
import PieExample from '../components/charts/PieExample'
import RadarExample from '../components/charts/RadarExample'
import ScatterExample from '../components/charts/ScatterExample'

export default {
  name: 'welcome',
  components: { BarExample, CustomExample, DoughnutExample, PieExample, RadarExample, ScatterExample },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
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
