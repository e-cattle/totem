<template>
  <v-app dark>
    <router-view></router-view>
    <v-bottom-navigation :input-value="this.$route.path != '/'" app fixed light grow>
      <v-btn @click="go('dashboard')" height="56">
        <span>Painel</span>
        <v-icon>poll</v-icon>
      </v-btn>

      <v-btn @click="go('device')" height="56">
        <span>Sensores</span>
        <v-icon>router</v-icon>
      </v-btn>

      <v-btn @click="go('application')" height="56">
        <span>Aplicativos</span>
        <v-icon>phonelink</v-icon>
      </v-btn>

      <v-btn @click="go('synchronize')" height="56">
        <span>Sincronizar</span>
        <v-icon>cloud_upload</v-icon>
      </v-btn>

      <v-btn @click="go('about')" height="56">
        <span>Sobre</span>
        <v-icon>info</v-icon>
      </v-btn>

      <v-btn class="px-4 py-0" disabled width="1200" height="56">
        <span class="title font-weight-black" style="color: #111;">
          {{ ip }}
        </span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
const axios = require('axios')

export default {
  name: 'App',
  data () {
    return {
      active: 0,
      ip: 'Obtendo o IP...',
      mac: '',
      interval: null
    }
  },
  methods: {
    getIp () {
      var self = this

      axios.get('http://localhost:3000/status').then((response) => {
        self.ip = response.data.ip
        self.mac = response.data.mac
      })
    },
    go (route) {
      if (this.$route.path === '/' + route) {
        return
      }

      this.$router.push(route)
    }
  },
  mounted () {
    this.interval = setInterval(() => { this.getIp() }, 10000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
