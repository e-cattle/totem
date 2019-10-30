<template>
  <div @click="go()" class="screensaver">
    <img :src="require('../assets/screensaver.png')" class="logo" ref="logo" style="top: 10px; left: 10px;" width="256" />

    <v-snackbar
      bottom
      color="teal"
      :timeout="6000"
      v-model="snackbar">
      Aguarde! O e-Cattle está iniciando...
      <v-btn @click="snackbar = false" dark text>Fechar</v-btn>
    </v-snackbar>

    <v-snackbar
      top
      color="gray"
      :timeout="4000"
      v-model="dialog">
      {{ error }}
    </v-snackbar>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      interval: null,
      snackbar: false,
      dialog: false,
      error: '',
      counter: 0
    }
  },
  methods: {
    cycle () {
      this.interval = setInterval(() => {
        let margin = 20

        let width = window.innerWidth - 299 - margin
        let height = window.innerHeight - 171 - margin

        let x = Math.floor(Math.random() * width) + 10
        let y = Math.floor(Math.random() * height) + 10

        this.$refs['logo'].style.left = x + 'px'
        this.$refs['logo'].style.top = y + 'px'
      }, 10000)
    },
    go () {
      if (this.$session.exists('TOKEN')) {
        this.$router.push('dashboard')
      } else {
        this.snackbar = true
      }
    },
    async setToken () {
      const token = await this.getToken()

      console.log('Token: ' + token)

      this.$session.set('TOKEN', token)
    },
    async getToken () {
      this.counter++

      console.log('Retry number #' + this.counter)

      try {
        const { data } = await axios.get('http://localhost:3000/totem/token')

        return data.token
      } catch (e) {
        this.error = e.response.data.message || e
        this.dialog = true

        await this.sleep(8000)

        return this.getToken()
      }
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  },
  beforeMount () {
    this.$session.clear()
  },
  mounted () {
    this.cycle()

    this.setToken()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.screensaver {
  background-color: black;
  width: 100%;
  height: 100%;
}
.logo {
  position: fixed;
}
</style>
