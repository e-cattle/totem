<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title>Sincronia de Dados na Nuvem</v-toolbar-title>
      <v-chip class="ml-3" :color="approve && active ? 'success' : 'error'" label text-color="white">
        <v-avatar class="mr-2">
          <v-icon v-html="active ? 'cloud_done' : 'cloud_off'" />
        </v-avatar>
        {{ active ? 'Sincronizando' : 'Sincronia Desligada' }}
      </v-chip>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :disabled="loading" @click="overview()" text>
          <v-icon left>refresh</v-icon>Atualizar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-alert type="error" icon="warning" :value="error" transition="scale-transition" dismissible class="mt-3 mb-0 mx-4">
      {{ message }}
    </v-alert>

    <v-layout id="wrapper" justify-center row wrap class="px-5 py-2">
      <v-flex xs5 v-if="loading">
        <v-card class="ma-2" width="310">
          <v-card-title>Aguarde...</v-card-title>
          <v-card-text>Estamos processando sua requisição. Por favor, aguarde!</v-card-text>
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
            <v-btn x-large color="success" @click="confirm.register = true" :disabled="!parseInt(this.id) > 0">
              <v-icon>done_outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs5 v-if="!loading && register && !approve">
        <v-card class="ma-2" width="310">
          <v-card-title>Aguardando Aprovação</v-card-title>
          <v-card-text>Este gateway está conectado à fazenda:</v-card-text>
          <v-card-text class="text-center">
            <v-chip color="warning" large label text-color="white" class="pa-4 font-weight-black">
              #&nbsp;{{ id }}
            </v-chip>
          </v-card-text>
          <v-card-text>Entretanto, ainda não foi aprovado para o envio de dados sensoriais.</v-card-text>
          <v-card-text>Caso seja um dos responsáveis pela fazenda, acesse a aplicação em nuvem do e-Cattle e APROVE este dispositivo. Identifique-o pelo seguinte endereço MAC:</v-card-text>
          <v-card-text class="text-center">
            <v-chip color="teal" large label text-color="white" class="pa-4 plain font-weight-black">
              {{ mac }}
            </v-chip>
          </v-card-text>
          <v-card-text>
            Caso tenha errado o ID da fazenda ou queria reiniciar o processo, cancele esta requisição:
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn @click="confirm.unregister = true" text color="error">
              <v-icon left>link_off</v-icon>Cancelar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs5 v-if="!loading && register && approve">
        <v-card class="ma-2" width="310" :color="active ? 'green darken-4' : 'grey darken-1'">
          <v-card-title>
            <span>Conectado à fazenda:</span>
            <v-spacer></v-spacer>
            <v-icon v-if="!active" right color="error">priority_high</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-list-item style="background-color: rgba(255, 255, 255, 0.1);">
            <v-list-item-content>
              <v-list-item-title class="headline">{{ farm.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ farm.location }} &bull; {{ farm.country }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: rgba(255, 255, 255, 0.05);">
            <v-list-item-content>
              <v-list-item-subtitle>Para gerenciar esta conexão, acesse:</v-list-item-subtitle>
              <v-list-item-title class="plain">https://e-cattle.farm/{{ id }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text v-if="!active" class="font-weight-bold">Atenção! Este dispositivo esta DESATIVADO para o envio de dados sensoriais.</v-card-text>
          <v-card-text>Para gerenciar este dispositivo, identifique-o pelo seguinte endereço MAC:</v-card-text>
          <v-card-text class="text-center">
            <v-chip color="white" light large label class="pa-4 plain font-weight-black">
              {{ mac }}
            </v-chip>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="text-center">
            <v-btn @click="confirm.unregister = true" text color="error">
              <v-icon left>link_off</v-icon>Desconectar
            </v-btn>
          </v-card-text>
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
                  <v-list-item-subtitle v-if="cloud">Os serviços de nuvem da plataforma e-Cattle estão alcançáveis e disponíveis.</v-list-item-subtitle>
                  <v-list-item-subtitle v-else>Os serviços de nuvem da plataforma e-Cattle estão INDISPONÍVEIS no momento.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="approve ? 'success' : register ? 'warning' : 'error'" v-html="approve ? 'phonelink_ring' : register ? 'device_unknown' : 'phonelink_erase'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Registro na Plataforma</v-list-item-title>
                  <v-list-item-subtitle v-if="register">Este middleware está registrado nos serviços de nuvem.</v-list-item-subtitle>
                  <v-list-item-subtitle v-else>Este middleware ainda não está registrado nos serviços de nuvem.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="active ? 'success' : approve ? 'warning' : 'error'">vpn_key</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Aprovação na Plataforma</v-list-item-title>
                  <v-list-item-subtitle v-if="!approve">Este middleware ainda NÃO foi autorizado na plataforma e-Cattle.</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="approve && !active">Este middleware está autorizado na plataforma e-Cattle, porém foi DESATIVADO por algum gestor.</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="approve && active">Este middleware está AUTORIZADO na plataforma e-Cattle e já pode enviar dados sensoriais.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="sync ? 'success' : 'error'">cloud_upload</v-icon>
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

    <v-dialog max-width="400" v-model="confirm.register">
      <v-card>
        <v-card-title class="headline mb-3">
          Conectar Dispositivo
        </v-card-title>
        <v-card-text>Conectar este dispositivo à propriedade com o identificador abaixo?</v-card-text>
        <v-card-text class="text-center">
          <v-chip color="warning" large label text-color="white" class="pa-8 title font-weight-black">
            #&nbsp;{{ id }}
          </v-chip>
        </v-card-text>
        <v-card-text>
          Atenção! Após a conexão inicial, este dispositivo precisará ser APROVADO na tela de gestão da propriedade na aplicação em nuvem do e-Cattle.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirm.register = false" text>Cancelar</v-btn>
          <v-btn @click="connect()" color="success">Conectar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog max-width="400" v-model="confirm.unregister">
      <v-card>
        <v-card-title class="headline mb-3">
          Desconectar Dispositivo
        </v-card-title>
        <v-card-text>Tem certeza de que deseja desconectar este dispositivo da fazenda {{ farm.name }} (#{{ id }})?</v-card-text>
        <v-card-text>
          Atenção! Este dispositivo não irá mais enviar dados sensoriais para a nuvem.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirm.register = false" text>Cancelar</v-btn>
          <v-btn @click="disconnect()" color="error">Desconectar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
import axios from 'axios'
// import moment from 'moment'

export default {
  data () {
    return {
      id: '',
      error: false,
      message: '',
      loading: true,
      mac: '',
      online: false,
      cloud: false,
      register: false,
      approve: false,
      active: false,
      sync: false,
      confirm: {
        register: false,
        unregister: false
      },
      farm: {
        name: '',
        location: '',
        country: ''
      }
    }
  },
  beforeMount () {
    this.config = {
      headers: { 'Authorization': 'Bearer ' + this.$session.get('TOKEN') }
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
    overview () {
      this.error = false
      this.loading = true

      var self = this

      axios.get('http://localhost:3000/totem/cloud/overview', this.config).then((response) => {
        console.log(JSON.stringify(response.data))

        self.mac = response.data.mac
        self.online = response.data.online
        self.cloud = response.data.cloud
        self.register = response.data.register
        self.approve = response.data.approve
        self.active = response.data.active
        self.farm = response.data.farm
        self.sync = response.data.sync

        if (response.data.id) {
          self.id = response.data.id
        } else {
          self.id = ''
        }
      }).catch((error) => {
        self.message = error
        self.error = true
      }).finally(() => {
        self.loading = false
      })
    },
    connect () {
      this.confirm.register = false

      if (!this.online || !this.cloud) {
        this.message = 'É necessário estar conectado à INTERNET e aos SERVIÇOS EM NUVEM para conectar!'
        this.error = true

        return
      }

      this.error = false
      this.loading = true

      var self = this

      axios.post('http://localhost:3000/totem/cloud/connect', { farm: this.id }, this.config).then((response) => {
        self.overview()
      }).catch((error) => {
        self.message = error
        self.error = true
        self.loading = false
      })
    },
    disconnect () {
      this.confirm.unregister = false

      this.error = false
      this.loading = true

      var self = this

      axios.post('http://localhost:3000/totem/cloud/disconnect', {}, this.config).then((response) => {
        self.overview()
      }).catch((error) => {
        self.message = error
        self.error = true
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
