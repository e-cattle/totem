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
  </div>
</template>

<script>
const axios = require('axios')
const jwt = require('jsonwebtoken')

export default {
  data () {
    return {
      interval: null,
      snackbar: false
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
    }
  },
  mounted () {
    this.cycle()

    this.$session.clear()

    axios.get('http://localhost:3000/id').then((response) => {
      console.log('Machine ID: ' + response.data.id)

      const token = jwt.sign({ date: new Date().toISOString() }, response.data.id)

      console.log('Token: ' + token)

      this.$session.set('TOKEN', token)
    })
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
