<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Dispositivos Sensoriais</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :disabled="loading" @click="refresh()" text>
          <v-icon left>refresh</v-icon>Atualizar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="devices"
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
      <template v-slot:item.mac="{ item }">
        <span class="plain">{{ item.mac }}</span>
      </template>
      <template v-slot:item.enable="{ item }">
        <v-chip :color="item.enable ? 'green' : 'red'" dark label>{{ item.enable ? 'Sim' : 'Não' }}</v-chip>
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
          <v-toolbar-title>{{ device.name }}</v-toolbar-title>
          <v-chip :color="device.enable ? 'green' : 'red'" class="ml-3" label text-color="white">
            <v-avatar class="mr-2">
              <v-icon>{{ device.enable ? 'check_circle' : 'cancel' }}</v-icon>
            </v-avatar>
            {{ device.enable ? 'Ativo' : 'Inativo' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              :color="device.enable ? 'red' : 'green'"
              :disabled="enabling"
              @click="device.enable ? disable (device) : enable (device)"
              text
            >
              <v-icon left>{{ device.enable ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ device.enable ? 'Desativar' : 'Ativar' }}
            </v-btn>
            <v-btn @click="dialog = false" text>
              <v-icon left>close</v-icon>Fechar
            </v-btn>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="confirm = true">
                  <v-list-item-icon>
                    <v-icon>delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Remover Dispositivo</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout class="mx-1 mt-1" row wrap>
          <v-flex xs6>
            <v-card class="white--text mx-2 my-2" color="blue-grey darken-3">
              <v-card-title class="title" primary>Informações Técnicas</v-card-title>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Descrição:</div>
                  <div class="plain">{{ device.description }}</div>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Fornecedor:</div>
                  <div class="plain">{{ device.branch }} ({{ device.model }})</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Endereço MAC:</div>
                  <div class="plain">{{ device.mac }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Localização:</div>
                  <div class="plain">{{ device.local }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Data do Registro:</div>
                  <div class="plain">{{ date(device.created) }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Última Atualização:</div>
                  <div class="plain">{{ date(device.changed) }} ({{ device.version }}&ordf; Versão)</div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="white--text mx-2 my-2" color="teal darken-3">
              <v-card-title class="title" primary>Aferições</v-card-title>
              <template v-for="(sensor, index) in device.sensors">
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
          <v-flex xs12>
            <device-chart :data="chart" v-if="dialog" />
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
  </v-content>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import DeviceChart from '../components/charts/DeviceChart'

export default {
  components: {
    DeviceChart
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
      device: {
        name: '',
        local: '',
        date: '',
        mac: ''
      },
      headers: [
        { text: 'Nome', align: 'left', value: 'name' },
        { text: 'Local', align: 'left', value: 'local' },
        { text: 'Registro', align: 'left', value: 'created' },
        { text: 'MAC', align: 'left', value: 'mac', sortable: false },
        { text: 'Ativo', align: 'left', value: 'enable', sortable: false },
        { text: '', value: 'action', sortable: false }
      ],
      devices: [],
      chart: [
        { label: 'Temperatura', data: [40, 39, 10, 40, 39, 80, 40] },
        { label: 'Úmidade', data: [60, 55, 32, 10, 2, 12, 53] },
        { label: 'Iluminância', data: [25, 32, 18, 4, 34, 83, 12] },
        { label: 'Pressão', data: [10, 2, 60, 55, 32, 12, 74] },
        { label: 'Ventilação', data: [32, 10, 2, 12, 60, 55, 2] },
        { label: 'Radiação UV', data: [55, 32, 67, 10, 2, 12, 41] },
        { label: 'Ponto de Orvalho', data: [6, 23, 10, 37, 8, 82, 34] }
      ],
      auth: null
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
    this.refresh()
  },
  methods: {
    open (device) {
      this.device = device

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
    enable (device) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/device/enable/' + device.mac, {}, this.config).then((response) => {
        device.enable = true
      }).finally(() => {
        this.enabling = false
      })
    },
    disable (device) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/device/disable/' + device.mac, {}, this.config).then((response) => {
        device.enable = false
      }).finally(() => {
        this.enabling = false
      })
    },
    remove () {
      this.enabling = true

      axios.delete('http://localhost:3000/totem/device/' + this.device.mac, this.config).then((response) => {
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
