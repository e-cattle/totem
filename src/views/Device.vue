<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Dispositivos Sensoriais</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn small flat>
          <v-icon left>refresh</v-icon>
          Atualizar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="devices"
      :pagination.sync="pagination"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.local }}</td>
        <td>{{ props.item.date }}</td>
        <td class="plain">{{ props.item.mac }}</td>
        <td>{{ props.item.active ? 'Yes' : 'No' }}</td>
        <td class="text-xs-right">
          <v-btn icon @click="open(props.item)">
            <v-icon>settings</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <div class="text-xs-center py-2">
      <v-pagination :length="pages" v-model="pagination.page"></v-pagination>
    </div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ device.name }}</v-toolbar-title>
          <v-chip small :color="device.active ? 'green' : 'red'" text-color="white" class="ml-3">
            <v-avatar>
              <v-icon>{{ device.active ? 'check_circle' : 'cancel' }}</v-icon>
            </v-avatar>
            {{ device.active ? 'Active' : 'Disabled' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn flat @click="dialog = false" :color="device.active ? 'red' : 'green'">
              <v-icon left>{{ device.active ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ device.active ? 'Deactivate' : 'Activate' }}
            </v-btn>
            <v-btn flat @click="dialog = false">
              <v-icon left>close</v-icon>
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout row wrap class="mx-1 mt-1">
          <v-flex xs6>
            <v-card color="blue-grey darken-3" class="white--text mx-2 my-2">
              <v-card-title primary class="title">Technical Information</v-card-title>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Description</div>
                  <div class="plain">{{ device.description }})</div>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Supplier</div>
                  <div class="plain">{{ device.branch }} ({{ device.model }})</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">MAC Address</div>
                  <div class="plain">{{ device.mac }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Local</div>
                  <div class="plain">{{ device.local }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Register Date</div>
                  <div class="plain">{{ device.date }}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card color="teal darken-3" class="white--text mx-2 my-2">
              <v-card-title primary class="title">Measurements</v-card-title>
              <template v-for="sensor in device.sensors">
                <v-card-text v-bind:key="'t' + sensor.id">
                  <div>
                    <div class="subheading mb-1">Sensor: {{ sensor.name }}</div>
                    <div class="plain">{{ sensor.descriptor }}</div>
                  </div>
                </v-card-text>
                <v-divider light v-bind:key="'d' + sensor.id"></v-divider>
              </template>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <device-chart v-if="dialog" :data="device.chart" />
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
import DeviceChart from '../components/charts/DeviceChart'

export default {
  components: {
    DeviceChart
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 15,
        sortBy: 'date',
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
        { text: 'Registro', align: 'left', value: 'date' },
        { text: 'MAC', align: 'left', value: 'mac', sortable: false },
        { text: 'Ativo', align: 'left', value: 'active' },
        { text: '', align: 'right', value: 'name', sortable: false }
      ],
      devices: [
        {
          name: 'BalPass 2.0',
          description: 'Weighing device of field animals identified with RFID.',
          local: 'Picket from south cove (near the animal retreat).',
          date: '2019-06-13 19:43',
          mac: '00:22:18:fb:7a:12',
          branch: 'Coimma',
          model: 'BP-2.18.8',
          active: true,
          chart: [
            { label: 'Temperatura', data: [40, 39, 10, 40, 39, 80, 40] },
            { label: 'Úmidade', data: [60, 55, 32, 10, 2, 12, 53] },
            { label: 'Peso', data: [6, 23, 64, 43, 27, 61, 14] }
          ],
          sensors: [
            { name: 'DHT22', descriptor: 'Temperature (from -40º to 125ºC, with ±0,5ºC accuracy).' },
            { name: 'DHT22', descriptor: 'Humidity (from 0 to 100%, with 5% accuracy).' },
            { name: 'YGX-DYZ011', descriptor: 'Weight (up to 80t, with 2% accuracy).' }
          ]
        },
        {
          name: 'Snooper 1.0',
          local: 'Area 12 with iLPF (CCN program certified).',
          date: '2019-04-21 09:12',
          mac: 'af:43:2c:ff:7b:d3',
          branch: 'Embrapa',
          model: '1.16.12',
          active: false,
          chart: [
            { label: 'Temperatura', data: [40, 39, 10, 40, 39, 80, 40] },
            { label: 'Úmidade', data: [60, 55, 32, 10, 2, 12, 53] },
            { label: 'Iluminância', data: [25, 32, 18, 4, 34, 83, 12] },
            { label: 'Pressão', data: [10, 2, 60, 55, 32, 12, 74] },
            { label: 'Ventilação', data: [32, 10, 2, 12, 60, 55, 2] },
            { label: 'Radiação UV', data: [55, 32, 67, 10, 2, 12, 41] },
            { label: 'Ponto de Orvalho', data: [6, 23, 10, 37, 8, 82, 34] }
          ],
          sensors: [
            { name: 'DHT22', descriptor: 'Temperatura (-40º a 125ºC, com precisão de ±0,5ºC).' },
            { name: 'DHT22', descriptor: 'Úmidade (0 a 100%, com precisão de 5%).' },
            { name: 'TSL2561', descriptor: 'Iluminância (0,1-40.000+ Lux).' },
            { name: 'BMP180', descriptor: 'Pressão atmosférica (300 à 1100hPa ou +9000 à -500 metros).' },
            { name: '3PS57', descriptor: 'Ventilação (entre 100 rpm e 6000 rpm).' },
            { name: 'UVM-30A', descriptor: 'Radiação Ultravioleta (200 a 370nm, com exatidão de ±1UV).' },
            { name: 'FA515', descriptor: 'Ponto de orvalho (-80° a 20° Ctd).' }
          ]
        },
        {
          name: 'BalPass 1.0',
          local: 'Picket from north cove (near the source of the creek).',
          date: '2018-04-11 11:22',
          mac: '11:34:a2:fb:7c:56',
          branch: 'Coimma',
          model: 'BP-1.16.3',
          active: false,
          chart: [
            { label: 'Temperatura', data: [40, 39, 10, 40, 39, 80, 40] },
            { label: 'Úmidade', data: [60, 55, 32, 10, 2, 12, 53] },
            { label: 'Peso', data: [6, 23, 64, 43, 27, 61, 14] }
          ],
          sensors: [
            { name: 'DHT22', descriptor: 'Temperatura (-40º a 125ºC, com precisão de ±0,5ºC).' },
            { name: 'DHT22', descriptor: 'Úmidade (0 a 100%, com precisão de 5%).' },
            { name: 'YGX-DYZ011', descriptor: 'Massa/peso (até 80t, com precisão de 2%).' }
          ]
        },
        {
          name: 'BalPass 2.0',
          local: 'Picket from handling hose (near the farmhouse).',
          date: '2017-12-23 08:12',
          mac: '41:f2:5b:fb:8a:98',
          branch: 'Coimma',
          model: 'BP-2.18.8',
          active: true,
          chart: [
            { label: 'Temperatura', data: [40, 39, 10, 40, 39, 80, 40] },
            { label: 'Úmidade', data: [60, 55, 32, 10, 2, 12, 53] },
            { label: 'Peso', data: [6, 23, 64, 43, 27, 61, 14] }
          ],
          sensors: [
            { name: 'DHT22', descriptor: 'Temperatura (-40º a 125ºC, com precisão de ±0,5ºC).' },
            { name: 'DHT22', descriptor: 'Úmidade (0 a 100%, com precisão de 5%).' },
            { name: 'YGX-DYZ011', descriptor: 'Massa/peso (até 80t, com precisão de 2%).' }
          ]
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  methods: {
    open (device) {
      this.device = device

      this.dialog = true
    }
  }
}
</script>

<style scoped>
.plain {
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}
</style>
