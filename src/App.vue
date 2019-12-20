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

      <v-btn height="56">
        <span>Ajustes</span>
        <v-icon>tune</v-icon>
      </v-btn>

      <v-btn class="px-4 py-0" disabled width="1200" height="56">
        <span class="title font-weight-black" style="color: #111;">
          {{ ip }}<br />
          <v-chip label small color="teal" text-color="white" class="pl-1 pr-2">
            <v-icon class="my-0 py-0 mr-1">update</v-icon>
            {{ version }}
          </v-chip>
        </span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
const axios = require('axios')

const pkg = require('../package.json')

export default {
  name: 'App',
  data () {
    return {
      active: 0,
      ip: 'Obtendo o IP...',
      version: pkg.version,
      interval: null
    }
  },
  methods: {
    getIp () {
      var self = this

      axios.get('http://localhost:3000/status').then((response) => {
        self.ip = response.data.ip
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
