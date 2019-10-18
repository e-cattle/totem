<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Dispositivos Sensoriais</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="refresh()" :disabled="loading">
          <v-icon left>refresh</v-icon>
          Atualizar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="devices"
      :sort-by.sync="pagination.sortBy"
      sort-desc
      :page.sync="pagination.page"
      :items-per-page="pagination.rowsPerPage"
      hide-default-footer
      :loading="loading">
      <template v-slot:item.created="{ item }">
        <span>{{ date(item.created) }}</span>
      </template>
      <template v-slot:item.mac="{ item }">
        <span class="plain">{{ item.mac }}</span>
      </template>
      <template v-slot:item.enable="{ item }">
        <v-chip label :color="item.enable ? 'green' : 'red'" dark>{{ item.enable ? 'Sim' : 'Não' }}</v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn icon @click="open(item)">
          <v-icon>settings</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <div class="text-xs-center py-2">
      <v-pagination :length="pages" v-model="pagination.page"></v-pagination>
    </div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ device.name }}</v-toolbar-title>
          <v-chip label :color="device.enable ? 'green' : 'red'" text-color="white" class="ml-3 pl-1">
            <v-avatar>
              <v-icon>{{ device.enable ? 'check_circle' : 'cancel' }}</v-icon>
            </v-avatar>
            &nbsp;{{ device.enable ? 'Ativo' : 'Inativo' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="device.enable ? disable (device) : enable (device)" :color="device.enable ? 'red' : 'green'" :disabled="enabling">
              <v-icon left>{{ device.enable ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ device.enable ? 'Desativar' : 'Ativar' }}
            </v-btn>
            <v-btn text @click="dialog = false">
              <v-icon left>close</v-icon>
              Fechar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout row wrap class="mx-1 mt-1">
          <v-flex xs6>
            <v-card color="blue-grey darken-3" class="white--text mx-2 my-2">
              <v-card-title primary class="title">Informações Técnicas</v-card-title>
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
            <v-card color="teal darken-3" class="white--text mx-2 my-2">
              <v-card-title primary class="title">Aferições</v-card-title>
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
            <device-chart v-if="dialog" :data="chart" />
          </v-flex>
        </v-layout>
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
        rowsPerPage: 6,
        sortBy: 'created',
        descending: true
      },
      dialog: false,
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

      axios.get('http://localhost:3000/totem/devices').then((response) => {
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

      axios.put('http://localhost:3000/totem/device/enable/' + device.mac).then((response) => {
        device.enable = true
      }).finally(() => {
        this.enabling = false
      })
    },
    disable (device) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/device/disable/' + device.mac).then((response) => {
        device.enable = false
      }).finally(() => {
        this.enabling = false
      })
    }
  }
}
</script>

<style scoped>
.plain {
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}
</style>
