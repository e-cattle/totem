<template>
  <v-app dark>
    <router-view></router-view>
    <v-bottom-nav :active.sync="active" :value="this.$route.path != '/'" app fixed light>
      <v-btn @click="$router.push('dashboard')">
        <span>Painel</span>
        <v-icon>poll</v-icon>
      </v-btn>

      <v-btn @click="$router.push('device')">
        <span>Sensores</span>
        <v-icon>router</v-icon>
      </v-btn>

      <v-btn>
        <span>Aplicativos</span>
        <v-icon>phonelink</v-icon>
      </v-btn>

      <v-btn>
        <span>Sincronizar</span>
        <v-icon>cloud_upload</v-icon>
      </v-btn>

      <v-btn>
        <span>Configurações</span>
        <v-icon>tune</v-icon>
      </v-btn>

      <v-btn class="px-5 py-1" disabled>
        <span class="title">
          {{ ip }}<br />
          <v-chip label small color="teal" text-color="white">
            <v-avatar>
              <v-icon class="my-0 py-0">update</v-icon>
            </v-avatar>
            {{ version }}
          </v-chip>
        </span>
      </v-btn>
    </v-bottom-nav>
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

      axios.get('http://localhost:3000/totem/ip').then((response) => {
        self.ip = response.data[0].ip
      })
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
