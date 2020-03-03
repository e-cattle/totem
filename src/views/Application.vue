<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Aplicativos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :disabled="loading" @click="refresh()" text>
          <v-icon left>refresh</v-icon>Atualizar
        </v-btn>
        <v-btn :disabled="loading" @click="getQr()" text>
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
          <v-toolbar-title>{{ app.name }}</v-toolbar-title>
          <v-chip :color="app.enable ? 'green' : 'red'" class="ml-3 pl-1" label text-color="white">
            <v-avatar>
              <v-icon>{{ app.enable ? 'check_circle' : 'cancel' }}</v-icon>
            </v-avatar>
            &nbsp;{{ app.enable ? 'Ativo' : 'Inativo' }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              :color="app.enable ? 'red' : 'green'"
              :disabled="enabling"
              @click="app.enable ? disable (app) : enable (app)"
              text
            >
              <v-icon left>{{ app.enable ? 'wifi_off' : 'wifi' }}</v-icon>
              {{ app.enable ? 'Desativar' : 'Ativar' }}
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
          <v-flex xs7>
            <v-card class="white--text mx-2 my-2" color="blue-grey darken-3">
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Descrição:</div>
                  <div class="plain">{{ app.description }}</div>
                </div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text>
                <div>
                  <div class="subheading mb-1">Dispositivo:</div>
                  <div class="plain">{{ app.device }}</div>
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
                  <div class="subheading mb-1">Última Alteração:</div>
                  <div class="plain">{{ date(app.changed) }}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs5>
            <v-card light color="white" class="mx-2 my-2">
              <v-img height="300" :src="app.picture"></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{ app.user }}</v-list-item-title>
                  <v-list-item-subtitle>{{ app.email }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-dialog max-width="400" v-model="confirm">
      <v-card>
        <v-card-title class="headline">
          Tem certeza que deseja<br />
          REMOVER este aplicativo?
        </v-card-title>
        <v-card-text>
          Atenção! O aplicativo será permanentemente desativado e não será mais listado, até que um novo registro seja realizado.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirm = false" text>Cancelar</v-btn>
          <v-btn @click="remove()" color="red darken-1">Remover Aplicativo</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog width="308" v-model="register">
      <v-card>
        <v-card-text class="pt-6">
          <qrcode :value="qr" />
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
        user: '',
        date: '',
        device: ''
      },
      qr: [],
      headers: [
        { text: 'Nome', align: 'left', value: 'name' },
        { text: 'Usuário', align: 'left', value: 'user' },
        { text: 'Registro', align: 'left', value: 'created' },
        { text: 'Dispositivo', align: 'left', value: 'device' },
        { text: 'Ativo', align: 'left', value: 'enable', sortable: false },
        { text: '', value: 'action', sortable: false }
      ],
      auth: null,
      apps: []
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
    open (app) {
      this.app = app

      this.dialog = true
    },
    refresh () {
      this.loading = true

      axios.get('http://localhost:3000/totem/applications', this.config).then((response) => {
        this.apps = response.data
      }).finally(() => {
        this.loading = false
      })
    },
    date (date) {
      return moment(date).format('D/M/YY HH:mm')
    },
    enable (app) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/application/enable/' + app._id, {}, this.config).then((response) => {
        app.enable = true
      }).finally(() => {
        this.enabling = false
      })
    },
    disable (app) {
      this.enabling = true

      axios.put('http://localhost:3000/totem/application/disable/' + app._id, {}, this.config).then((response) => {
        app.enable = false
      }).finally(() => {
        this.enabling = false
      })
    },
    remove () {
      this.enabling = true

      axios.delete('http://localhost:3000/totem/application/remove/' + this.app._id, this.config).then((response) => {
        this.dialog = false
        this.confirm = false

        this.refresh()
      }).catch((error) => {
        console.log(error.response.data.message)
      }).finally(() => {
        this.enabling = false
      })
    },
    getQr () {
      this.loading = true
      this.register = true
      axios.get('http://localhost:3000/totem/qr').then((response) => {
        this.qr = JSON.stringify(response.data)

        console.log(this.qr)
      }).finally(() => {
        this.loading = false
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
