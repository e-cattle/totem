<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Sincronia de Dados na Nuvem</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip class="ml-3 pl-1" color="red" label text-color="white">
        <v-avatar>
          <v-icon>cloud_off</v-icon>
        </v-avatar>&nbsp;Desligada
      </v-chip>
    </v-toolbar>

    <v-container fluid>
      <v-row align="start" justify="center">
        <v-card class="ma-3" width="310">
          <v-card-title>Habilitar Sincronia</v-card-title>
          <v-card-text class="pb-1">Por favor, digite abaixo o identificador da propriedade:</v-card-text>
          <v-card-text class="pb-0">
            <v-text-field label="Identificador" outlined v-model="id"></v-text-field>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn v-for="i in 3" :key="i" x-large color="primary" class="font-weight-black" @click="value(i)">
              {{ i }}
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn v-for="i in 3" :key="i" x-large color="primary" class="font-weight-black" @click="value(i + 3)">
              {{ i + 3 }}
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn v-for="i in 3" :key="i" x-large color="primary" class="font-weight-black" @click="value(i + 6)">
              {{ i + 6 }}
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn x-large color="primary" class="font-weight-black" @click="value(0)">0</v-btn>
            <v-btn x-large color="error" @click="back()">
              <v-icon>backspace</v-icon>
            </v-btn>
            <v-btn x-large color="success">
              <v-icon>done_outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import axios from 'axios'
// import moment from 'moment'

export default {
  data () {
    return {
      id: ''
    }
  },
  beforeMount () {
    this.config = {
      headers: { 'Authorization': 'Bearer ' + this.$session.get('TOKEN') }
    }
  },
  mounted () {
    // this.refresh()
  },
  methods: {
    value (input) {
      if (input === 0 && this.id === '') return

      this.id += input.toString()
    },
    back () {
      if (this.id === '') return

      this.id = this.id.slice(0, -1)
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
