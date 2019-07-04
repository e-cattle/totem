<template>
  <v-app dark>
    <router-view></router-view>
    <v-bottom-nav app fixed light :value="this.$route.path != '/'">
      <v-btn>
        <span>Painel</span>
        <v-icon>poll</v-icon>
      </v-btn>

      <v-btn>
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

      <v-btn disabled class="px-5">
        <span class="title">{{ ip }}</span>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
const publicIp = require('public-ip')

export default {
  name: 'App',
  data () {
    return {
      ip: ''
    }
  },
  methods: {
  },
  mounted () {
    (async () => {
      this.ip = await publicIp.v4()
    })()
  }
}
</script>
