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

    <v-layout id="wrapper" justify-center row wrap class="px-5 py-2">
      <v-flex xs5 v-if="loading">
        <v-card class="ma-2" width="310">
          <v-card-title>Verificando Requisitos</v-card-title>
          <v-card-text>Estamos verificando se os requisitos necessários à sincronia de dados são satisfatórios. Por favor, aguarde.</v-card-text>
          <v-card-text class="text-center">
            <v-progress-circular
              :size="100"
              :width="15"
              color="pink"
              indeterminate
            />
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs5 v-if="!loading && !register">
        <v-card class="ma-2" width="310">
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
      </v-flex>

      <v-flex xs7>
        <v-card class="ma-2">
          <v-card-text>
            <v-list avatar disabled three-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="online ? 'success' : 'error'">device_hub</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Acesso à Internet</v-list-item-title>
                  <v-list-item-subtitle v-if="online">Este dispositivo está conectado à internet! Este é o primeiro passo para sincronizar seus dados.</v-list-item-subtitle>
                  <v-list-item-subtitle v-else>Este dispositivo NÃO está conectado à internet! Um requisito inicial para sincronizar seus dados.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="cloud ? 'success' : 'error'" v-html="cloud ? 'cloud_done' : 'cloud_off'" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Serviços de Nuvem</v-list-item-title>
                  <v-list-item-subtitle v-if="cloud">Os serviços de nuvem da plataforma e-Cattle estão alcançáveis e disponíveis!</v-list-item-subtitle>
                  <v-list-item-subtitle v-else>Os serviços de nuvem da plataforma e-Cattle estão INDISPONÍVEIS no momento!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="active ? 'success' : register ? 'warning' : 'error'" v-html="active ? 'phonelink_ring' : register ? 'device_unknown' : 'phonelink_erase'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Registro na Plataforma</v-list-item-title>
                  <v-list-item-subtitle v-if="register">Este middleware está registrado nos serviços de nuvem.</v-list-item-subtitle>
                  <v-list-item-subtitle v-else>Este middleware ainda não está registrado nos serviços de nuvem.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="error">vpn_key</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Habilitado na Plataforma</v-list-item-title>
                  <v-list-item-subtitle>Este middleware ainda não foi autorizado na plataforma e-Cattle.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="error">cloud_upload</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Enviando Dados Sensoriais</v-list-item-title>
                  <v-list-item-subtitle>Este middleware ainda não está enviando dados sensoriais para a plataforma e-Cattle.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import axios from 'axios'
// import moment from 'moment'

export default {
  data () {
    return {
      id: '',
      loading: true,
      farm: '',
      online: false,
      cloud: false,
      register: false,
      active: false
    }
  },
  mounted () {
    this.overview()
  },
  methods: {
    value (input) {
      if (input === 0 && this.id === '') return

      this.id += input.toString()
    },
    back () {
      if (this.id === '') return

      this.id = this.id.slice(0, -1)
    },
    registered () {
      return false
    },
    overview () {
      var self = this

      axios.get('http://localhost:3000/totem/cloud/overview').then((response) => {
        self.online = response.data.online
        self.cloud = response.data.cloud
        self.register = response.data.register
        self.active = response.data.active

        if (response.data.farm) {
          self.farm = response.data.farm
        }

        self.loading = false
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
