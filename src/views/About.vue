<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Sobre</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="confirmReboot = true" text>
          <v-icon left>refresh</v-icon>Reiniciar
        </v-btn>
        <v-btn @click="confirmShutdown = true" text>
          <v-icon left>power_off</v-icon>Desligar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-alert type="error" icon="warning" :value="error" transition="scale-transition" dismissible class="mt-3 mb-0 mx-4">
      {{ message }}
    </v-alert>

    <v-layout id="wrapper" justify-center row wrap class="px-5 py-2">
      <v-flex xs6>
        <v-card class="ma-2">
          <v-card-text>
            <v-list avatar disabled>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>public</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="plain">{{ ip }} {{ iface }}</v-list-item-title>
                  <v-list-item-subtitle>Endereço IP</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>device_hub</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="plain">{{ mac }}</v-list-item-title>
                  <v-list-item-subtitle>Endereço Físico (MAC Address)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>memory</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="plain">{{ version.kernel }}</v-list-item-title>
                  <v-list-item-subtitle>Versão do Kernel</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>tv</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="plain">{{ version.totem }}</v-list-item-title>
                  <v-list-item-subtitle>Versão do Totem</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card class="ma-2">
          <v-card-text class="text-center">
            O e-Cattle BigBoxx foi desenvolvido pela Embrapa Gado de Corte e pela Faculdade de Computação - FACOM da
            Universidade Federal de Mato Grosso do Sul - UFMS, em Campo Grande - MS - Brasil.
          </v-card-text>
          <v-card-text class="text-center">
            <v-img :src="require('../assets/partners.png')" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog max-width="400" v-model="confirmReboot">
      <v-card>
        <v-card-title class="headline">
          Tem certeza que deseja<br />
          REINICIAR o BigBoxx ?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="reboot (), confirmReboot = false" color="red darken-1">Reiniciar</v-btn>
          <v-btn @click="confirmReboot = false" text>Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog max-width="400" v-model="confirmShutdown">
      <v-card>
        <v-card-title class="headline">
          Tem certeza que deseja<br />
          DESLIGAR o BigBoxx ?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="shutdown (), confirmShutdown = false" color="red darken-1">Desligar</v-btn>
          <v-btn @click="confirmShutdown = false" text>Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
import axios from 'axios'

const pkg = require('../../package.json')

export default {
  data () {
    return {
      loading: false,
      enabling: false,
      confirmReboot: false,
      confirmShutdown: false,
      config: {},
      error: false,
      message: '',
      mac: '',
      ip: '',
      iface: '',
      version: {
        kernel: '',
        totem: ''
      }
    }
  },
  beforeMount () {
    this.config = {
      headers: { 'Authorization': 'Bearer ' + this.$session.get('TOKEN') }
    }

    this.version.totem = pkg.version
  },
  mounted () {
    this.refresh()
  },
  methods: {
    shutdown () {
      this.loading = true

      axios.get('http://localhost:3000/totem/shutdown', this.config).then((response) => {
        this.apps = response.data
      }).finally(() => {
        this.loading = false
      })
    },
    reboot () {
      this.loading = true

      axios.get('http://localhost:3000/totem/reboot', this.config).then((response) => {
        this.apps = response.data
      }).finally(() => {
        this.loading = false
      })
    },
    refresh () {
      axios.get('http://localhost:3000').then((response) => {
        this.version.kernel = response.data.version
      }).catch((error) => {
        self.message = error
        self.error = true
      })

      axios.get('http://localhost:3000/status').then((response) => {
        this.mac = response.data.mac
        this.ip = response.data.ip
      }).catch((error) => {
        self.message = error
        self.error = true
      })

      axios.get('http://localhost:3000/totem/system').then((response) => {
        this.iface = '(' + response.data.iface + ')'
      }).catch((error) => {
        self.message = error
        self.error = true
      })
    }
  }
}
</script>

<style scoped>
.plain {
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
}
</style>
