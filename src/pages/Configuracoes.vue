<template>
  <v-app id="example-2" toolbar>

    <v-toolbar fixed class="indigo" dark prominent>
      <v-btn icon to="/">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Configurações</v-toolbar-title>
    </v-toolbar>

    <main class="background-color: grey lighten-3">
      <v-container>

      </v-container>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Objetos', icon: 'dashboard' },
          { title: 'Tarefas', icon: 'today' },
          { title: 'Sensores', icon: 'settings_remote' }
        ],
        items2: [
          { title: 'Carteira' },
          { title: 'Chave do Carro' },
          { title: 'Chave de Casa' },
          { title: 'Celular' },
          { title: 'Relógio' },
          { title: 'Bolsa Notebook' },
        ],
        mini: false,
        right: null,
        dialog: false
      }
    }
  }
</script>

