<template>
  <v-app dark>
    <router-view></router-view>
    <v-bottom-navigation :input-value="this.$route.path != '/'" app fixed light grow>
      <v-btn @click="go('dashboard')">
        <span>Dashboard</span>
        <v-icon>poll</v-icon>
      </v-btn>

      <v-btn @click="go('device')">
        <span>Sensors</span>
        <v-icon>router</v-icon>
      </v-btn>

      <v-btn>
        <span>Apps</span>
        <v-icon>phonelink</v-icon>
      </v-btn>

      <v-btn>
        <span>Synchronize</span>
        <v-icon>cloud_upload</v-icon>
      </v-btn>

      <v-btn>
        <span>Settings</span>
        <v-icon>tune</v-icon>
      </v-btn>

      <v-btn class="px-6 pt-0" disabled>
        <span class="title font-weight-black" style="color: #111;">
          {{ ip }}<br />
          <v-chip label small color="teal" text-color="white" class="pl-1 pr-2">
            <v-avatar>
              <v-icon class="my-0 py-0">update</v-icon>
            </v-avatar>
            &nbsp;{{ version }}
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

      axios.get('http://localhost:3000/totem/ip').then((response) => {
        self.ip = response.data[0].ip
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
