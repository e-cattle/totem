<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Aplicativos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :disabled="loading" @click="refresh()" text>
          <v-icon left>refresh</v-icon>Atualizar
        </v-btn>
        <v-btn :disabled="loading" @click="register = true" text>
          <v-icon left>phonelink</v-icon>Conectar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="apps"
      :items-per-page="pagination.rowsPerPage"
      :loading="loading"
      :page.sync="pagination.page"
      :sort-by.sync="pagination.sortBy"
      hide-default-footer
      sort-desc
    >
      <template v-slot:item.created="{ item }">
        <span>{{ date(item.created) }}</span>
      </template>
      <template v-slot:item.cleaner="{ item }">
        <v-chip :color="item.cleaner ? 'green' : 'red'" dark label>{{ item.cleaner ? 'Sim' : 'Não' }}</v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn @click="open(item)" icon>
          <v-icon>settings</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <div class="text-xs-center py-2">
      <v-pagination :length="pages" v-model="pagination.page"></v-pagination>
    </div>

    <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="dialog">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ app.name }}</v-toolbar-title>
          <v-chip :color="app.cleaner ? 'green' : 'red'" class="ml-3 pl-1" label text-color="white">
            <v-avatar>
              <v-icon>{{ app.cleaner ? 'check_circle' : 'cancel' }}</v-icon>
            </v-avatar>
            &nbsp;{{ app.cleaner ? 'Ativo' : 'Inativo' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              :color="app.cleaner ? 'red' : 'green'"
              :disabled="enabling"
              @click="app.cleaner ? disable (device) : enable (device)"
              text
            >
              <v-icon left>{{ app.cleaner ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ app.cleaner ? 'Desativar' : 'Ativar' }}
            </v-btn>
            <v-btn @click="confirm = true" text>
              <v-icon left>delete</v-icon>Remover
            </v-btn>
            <v-btn @click="dialog = false" text>
              <v-icon left>close</v-icon>Fechar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout class="mx-1 mt-1" row wrap>
          <v-flex xs6>
            <v-card class="white--text mx-2 my-2" color="blue-grey darken-3">
              <v-card-title class="title" primary>Informações</v-card-title>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Descrição:</div>
                  <div class="plain">{{ app.description }}</div>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Versão:</div>
                  <div class="plain">{{ app.branch }} ({{ app.model }})</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Endereço MAC:</div>
                  <div class="plain">{{ app.mac }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Localização:</div>
                  <div class="plain">{{ app.local }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Data do Registro:</div>
                  <div class="plain">{{ date(app.created) }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Última Atualização:</div>
                  <div class="plain">{{ date(app.changed) }} ({{ app.version }}&ordf; Versão)</div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="white--text mx-2 my-2" color="teal darken-3">
              <v-card-title class="title" primary>Aferições</v-card-title>
              <template v-for="(sensor, index) in app.sensors">
                <v-card-text v-bind:key="'t' + index">
                  <div>
                    <div class="subheading mb-1">Sensor {{ sensor.label || sensor.name }}</div>
                    <div class="plain">{{ sensor.description }}</div>
                  </div>
                </v-card-text>
                <v-divider light v-bind:key="'d' + index"></v-divider>
              </template>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-dialog max-width="400" v-model="confirm">
      <v-card>
        <v-card-title class="headline">
          Tem certeza que deseja<br />
          REMOVER este dispositivo?
        </v-card-title>
        <v-card-text>
          Atenção! O dispositivo será permanentemente desativado e não será mais listado, até que um novo registro seja realizado. Os dados sensoriais enviados permanecerão disponíveis.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirm = false" text>Cancelar</v-btn>
          <v-btn @click="remove()" color="red darken-1">Remover Dispositivo</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog width="210" v-model="register">
      <v-card class="pt-6">
        <v-card-text>
          <qrcode :value="JSON.stringify(qr)" />
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn @click="register = false" block>Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import qrcode from 'vue-qrcode'

export default {
  components: {
    qrcode
  },
  data () {
    return {
      loading: false,
      enabling: false,
      pagination: {
        rowsPerPage: 5,
        sortBy: 'created',
        descending: true
      },
      dialog: false,
      confirm: false,
      register: false,
      app: {
        name: '',
        local: '',
        date: '',
        mac: ''
      },
      qr: {
        mac: 'dc:a9:04:97:d7:c0',
        ip: '10.147.10.27'
      },
      headers: [
        { text: 'Nome', align: 'left', value: 'name' },
        { text: 'Usuário', align: 'left', value: 'user' },
        { text: 'Registro', align: 'left', value: 'created' },
        { text: 'Dispositivo', align: 'left', value: 'device' },
        { text: 'Limpeza', align: 'left', value: 'cleaner', sortable: false },
        { text: '', value: 'action', sortable: false }
      ],
      auth: null,
      apps: [
        {
          name: 'e-Bovis',
          user: 'Camilo Carromeu',
          created: '2018-10-05T14:27:34-04:00',
          device: 'Samsung Galaxy S10+ (Android 9)',
          cleaner: false
        },
        {
          name: 'Cria Certo',
          user: 'Thaís B. Amaral',
          created: '2019-06-12T15:27:34-04:00',
          device: 'iPhone XR (iOS 11)',
          cleaner: false
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
        return 1
      }

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
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
    open (app) {
      this.app = app

      this.dialog = true
    },
    refresh () {
      this.loading = true

      axios.get('http://localhost:3000/totem/devices', this.config).then((response) => {
        this.devices = response.data
      }).finally(() => {
        this.loading = false
      })
    },
    date (date) {
      return moment(date).format('D/M/YY HH:mm')
    },
    enable (app) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/device/enable/' + app.mac, {}, this.config).then((response) => {
        app.enable = true
      }).finally(() => {
        this.enabling = false
      })
    },
    disable (app) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/device/disable/' + app.mac, {}, this.config).then((response) => {
        app.enable = false
      }).finally(() => {
        this.enabling = false
      })
    },
    remove () {
      this.enabling = true

      axios.delete('http://localhost:3000/totem/device/' + this.app.mac, this.config).then((response) => {
        this.dialog = false
        this.confirm = false

        this.refresh()
      }).catch((error) => {
        console.log(error.response.data.message)
      }).finally(() => {
        this.enabling = false
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
