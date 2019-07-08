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
        <td class="mac">{{ props.item.mac }}</td>
        <td>{{ props.item.active ? 'Sim' : 'Não' }}</td>
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
            {{ device.active ? 'Ativado' : 'Desativado' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn flat @click="dialog = false" :color="device.active ? 'red' : 'green'">
              <v-icon left>{{ device.active ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ device.active ? 'Desativar' : 'Ativar' }}
            </v-btn>
            <v-btn flat @click="dialog = false">
              <v-icon left>close</v-icon>
              Fechar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
export default {
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
        { text: 'Localização', align: 'left', value: 'local' },
        { text: 'Registro', align: 'left', value: 'date' },
        { text: 'Endereço MAC', align: 'left', value: 'mac', sortable: false },
        { text: 'Ativo', align: 'left', value: 'active' },
        { text: '', align: 'right', value: 'name', sortable: false }
      ],
      devices: [
        {
          name: 'BalPass 2.0',
          local: 'Retiro da encosta alta',
          date: '2019-06-13 19:43',
          mac: '00:22:18:fb:7a:12',
          active: true
        },
        {
          name: 'Snooper 1.0',
          local: 'PLEASE Lab',
          date: '2019-04-21 09:12',
          mac: 'af:43:2c:ff:7b:d3',
          active: false
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
.mac {
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}
</style>
