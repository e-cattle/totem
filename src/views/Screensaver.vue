<template>
  <div class="screensaver" @click="dashboard">
    <img :src="require('../assets/screensaver.png')" class="logo" style="top: 10px; left: 10px;" width="256" ref="logo" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      interval: null
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
      }, 3000)
    },
    dashboard () {
      this.$router.push('dashboard')
    }
  },
  mounted () {
    this.cycle()
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
