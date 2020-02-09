<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Config</v-toolbar-title>
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

export default {
  data () {
    return {
      loading: false,
      enabling: false,
      confirmReboot: false,
      confirmShutdown: false,
      configs: []
    }
  },
  beforeMount () {
    this.config = {
      headers: { 'Authorization': 'Bearer ' + this.$session.get('TOKEN') }
    }
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
